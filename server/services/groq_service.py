import os
import random

from dotenv import load_dotenv
from groq import Groq

from prompts.system_prompts import SYSTEM_PROMPTS

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY"),
    timeout=30.0,
    max_retries=2,
)

MODEL = "openai/gpt-oss-120b"

RANDOM_MODES = [
    "dark",
    "gen-z",
    "friendly",
    "mentor",
]


def ask_ai(message: str, mode: str = "normal"):
    if not message or not message.strip():
        return "Kuch likho bhai, blank message pe main kya bolun?"

    if mode == "random":
        mode = random.choice(RANDOM_MODES)

    prompt = SYSTEM_PROMPTS.get(
        mode,
        SYSTEM_PROMPTS["normal"],
    )

    try:
        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {
                    "role": "system",
                    "content": prompt,
                },
                {
                    "role": "user",
                    "content": message.strip(),
                },
            ],
            temperature=0.9,
            max_completion_tokens=300,
            reasoning_effort="medium",
        )

        content = response.choices[0].message.content

        if not content or not content.strip():
            return "Response generate nahi ho paya. Ek baar phir try karo."

        return content.strip()

    except Exception as error:
        print(f"Groq error: {type(error).__name__}: {error}")
        return "AI response abhi generate nahi ho paya. Please thodi der baad try karo."