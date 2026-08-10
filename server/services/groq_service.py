import os
import random

from dotenv import load_dotenv
from groq import Groq

from prompts.system_prompts import SYSTEM_PROMPTS

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def ask_ai(message: str, mode: str = "normal"):
    if mode == "random":
        mode = random.choice(
            [
                "roast",
                "dark",
                "gen-z",
                "friendly",
                "mentor",
                "bachhi",
            ]
        )

    prompt = SYSTEM_PROMPTS.get(
        mode,
        SYSTEM_PROMPTS["normal"],
    )

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": prompt,
            },
            {
                "role": "user",
                "content": message,
            },
        ],
        temperature=0.9,
        max_tokens=100,
    )

    return response.choices[0].message.content.strip()