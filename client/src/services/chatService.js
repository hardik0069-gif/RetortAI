const API_URL = "https://retortai-api.onrender.com";

export async function sendMessage(message, mode) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      mode,
    }),
  });

  if (!response.ok) {
    throw new Error("Backend Error");
  }

  return await response.json();
}

export async function generateTagline(previousTaglines = []) {
  const previous =
    previousTaglines.length > 0
      ? previousTaglines.join(" | ")
      : "None";

  const prompt = `
Create ONE original homepage tagline for RetortAI.

RetortAI is a modern AI chat app with personality, attitude, humour and different conversation modes.

STYLE:
- Maximum 7 words
- Punchy and memorable
- Modern startup/product feel
- Clever rather than cheesy
- Confident, slightly rebellious
- Can be witty, dark, playful or Gen-Z
- Must sound like a real brand tagline
- No generic AI clichés
- No motivational quotes
- No cringe
- No emojis
- No quotation marks
- Return ONLY the tagline

LANGUAGE:
Choose randomly between these two styles:
1. Natural English
2. Natural Hinglish written in Roman letters

Do NOT always choose Hinglish.
Approximately half should be English and half should be Hinglish.

For Hinglish:
- Use natural Indian conversational language
- Mix Hindi and English organically
- Do not translate an English slogan word-for-word
- Avoid basic phrases such as "Baat karo", "Retort lo", "Sawaal tera", "Mera attitude"
- Make it sound sharp, clever and brand-worthy

Examples of the QUALITY and STYLE wanted:
"AI with a little attitude."
"Your chat, your rules."
"Thoda chaos, kaafi personality."
"Answers, but make them interesting."
"Normal is not the default."
"AI jo vibe samjhe."
"Talk smart. Get interesting."
"Seedhe answers, zero boring energy."

These examples are only style references.
Do NOT copy them or create close variations.

Previous taglines:
${previous}

Create something completely different from all previous taglines.
`;

  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: prompt,
      mode: "random",
    }),
  });

  if (!response.ok) {
    throw new Error("Tagline generation failed");
  }

  const data = await response.json();

  return data.reply?.trim() || "AI with a little attitude.";
}