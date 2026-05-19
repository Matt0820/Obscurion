from fastapi import APIRouter
from models.carrinho import Carrinho
from services import carrinho_service

router = APIRouter(prefix="/carrinho", tags=["Carrinho"])

@router.post('/')
def criar_carrinho(carrinho: Carrinho):
    carrinho = carrinho_service.criar_carrinho(carrinho)
    return carrinho
@router.get('/')
def listar_carrinho():
    carrinho = carrinho_service.listar_carrinho()
    return carrinho
@router.delete('/{carrinho_id}')
def excluir_carrinho(carrinho_id: int):
    carrinho = carrinho_service.excluir_carrinho(carrinho_id)
    return carrinho



