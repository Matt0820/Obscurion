from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.database import criar_banco
from routes import produto_routes, cliente_routes, carrinho_routes

#inicializa a aplicação
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://26.254.103.85:3000",
    ], # endereço do Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(produto_routes.router)
app.include_router(cliente_routes.router)
app.include_router(carrinho_routes.router)

#cria as tabelas no banco ao iniciar
@app.on_event("startup")
def startup():
    criar_banco()

#rota de teste
@app.get('/')
def index():
    return {'message': 'Hello World'}

