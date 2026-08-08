from prompts.system_prompts import SYSTEM_PROMPTS
import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


def ask_ai(message: str):
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
    {
        "role": "system",
        "content": SYSTEM_PROMPTS["normal"],
    },
    {
        "role": "user",
        "content": message,
    },
    ],
        temperature=0.7,
    )

    return response.choices[0].message.content