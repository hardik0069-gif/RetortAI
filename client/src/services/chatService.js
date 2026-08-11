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
Create ONE short homepage tagline for RetortAI.

RetortAI is an AI chat app where users can choose different personalities such as Roast, Dark, Gen-Z, Friendly, Mentor, Random and Bachhi.

The tagline should make a normal visitor immediately understand that RetortAI is an AI they can chat with and that it has personality.

Rules:
- Maximum 7 words
- Very easy to understand
- Short and punchy
- Modern
- Clever
- Natural
- No complicated words
- No abstract phrases
- No corporate marketing language
- No motivational quotes
- No cringe
- No emojis
- No quotation marks
- Return ONLY the tagline

LANGUAGE:
Randomly choose either:
1. Natural English
2. Natural Hinglish written in Roman letters

Keep English and Hinglish roughly 50/50.

Good English style:
"AI that talks back."
"Your AI, with an attitude."
"Chat with a personality."
"Ask anything. Get a retort."
"AI, but less boring."

Good Hinglish style:
"AI jo seedha jawab de."
"Baat karo, boring nahi."
"AI jo tumhari vibe samjhe."
"Normal AI se thoda alag."

These are examples of quality only.
Do not copy them or create close variations.

Previous taglines:
${previous}

Create something completely new.
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