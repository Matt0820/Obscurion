from fastapi import APIRouter
from models.cliente import Cliente
from services import cliente_service

router = APIRouter(prefix="/cliente", tags=["Cliente"])

@router.post('/')
def criar_cliente(cliente: Cliente):
    produto = cliente_service.criar_cliente(cliente)
    return produto
@router.get('/')
def listar_clientes():
    cliente = cliente_service.listar_clientes()
    return cliente
@router.get('/filtrar')
def filtrar_cliente(nome: str):
    cliente = cliente_service.filtrar_clientes(nome)
    return cliente
@router.get('/{cliente_id}')
def selecionar_cliente(cliente_id: int):
    cliente = cliente_service.selecionar_cliente(cliente_id)
    return cliente
@router.delete('/{cliente_id}')
def excluir_cliente(cliente_id: int):
    return cliente_service.excluir_cliente(cliente_id)