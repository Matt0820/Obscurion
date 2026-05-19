import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.database import criar_banco
from routes import carrinho_routes, cliente_routes, produto_routes

app = FastAPI(title="Obscurion API")

allowed_origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

extra_origin = os.getenv("FRONTEND_URL")
if extra_origin:
    allowed_origins.append(extra_origin.rstrip("/"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(produto_routes.router)
app.include_router(cliente_routes.router)
app.include_router(carrinho_routes.router)


@app.on_event("startup")
def startup():
    criar_banco()


@app.get("/")
def index():
    return {"message": "Obscurion API online"}
