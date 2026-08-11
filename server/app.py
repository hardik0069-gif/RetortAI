from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from services.groq_service import ask_ai

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://retort-ai.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class ChatRequest(BaseModel):
    message: str
    mode: str = "normal"

@app.get("/")
def home():
    return {
        "message": "RetortAI Backend Running"
    }

@app.post("/chat")
def chat(data: ChatRequest):
    reply = ask_ai(
        data.message,
        data.mode
    )

    return {
        "reply": reply
    }