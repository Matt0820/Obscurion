from fastapi import FastAPI
from database.database import criar_banco
from routes import produto_routes, cliente_routes, carrinho_routes

#inicializa a aplicação
app = FastAPI()

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

