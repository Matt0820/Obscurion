from fastapi import FastAPI, APIRouter
from models.produto import Produto
from services import produto_service

router = APIRouter(prefix="/produto", tags=["Produto"])

@router.post('/')
def criar_produto(produto: Produto):
    produto = produto_service.criar_produto(produto)
    return produto
@router.get('/')
def listar_produto():
    produtos = produto_service.listar_produto()
    return produtos
@router.get('/filtrar')
def filtrar_produto(nome: str):
    produtos = produto_service.filtrar_produto(nome)
    return produtos
@router.get('/{produto_id}')
def selecionar_produto(produto_id: int):
    produto = produto_service.selecionar_produto(produto_id)
    return produto
@router.delete('/{produto_id}')
def excluir_produto(produto_id: int):
    return produto_service.excluir_produto(produto_id)