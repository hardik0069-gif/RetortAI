from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware

from services.groq_service import ask_ai

app = FastAPI(
    title="ZyroxeAI API",
    version="2.0.0",
)

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
    message: str = Field(min_length=1, max_length=12000)
    mode: str = "normal"


@app.get("/")
def home():
    return {
        "message": "ZyroxeAI Backend Running",
        "version": "2.0.0",
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "zyroxeai-api",
    }


@app.post("/chat")
def chat(data: ChatRequest):
    try:
        reply = ask_ai(
            data.message,
            data.mode,
        )

        if not reply:
            raise HTTPException(
                status_code=502,
                detail="AI returned an empty response.",
            )

        return {
            "reply": reply,
            "mode": data.mode,
        }

    except HTTPException:
        raise

    except Exception as error:
        print(f"Chat endpoint error: {type(error).__name__}: {error}")

        raise HTTPException(
            status_code=502,
            detail="AI service temporarily unavailable.",
        )