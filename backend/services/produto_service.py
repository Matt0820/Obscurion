from sqlmodel import Session, select
from database.database import engine
from models.produto import Produto


def criar_produto(produto: Produto):
    with Session(engine) as session:
        session.add(produto)
        session.commit()
        session.refresh(produto)
        return produto
def listar_produto():
    with Session(engine) as session:
        produtos = session.exec(select(Produto)).all()
        return produtos
def selecionar_produto(produto_id: int):
    with Session(engine) as session:
        produto = session.get(Produto, produto_id)
        return produto
def filtrar_produto(nome: str):
    with Session(engine) as session:
        query = select(Produto).where(Produto.nome.contains(nome))
        return session.exec(query).all()
def excluir_produto(produto_id: int):
    with Session(engine) as session:
        produto = session.get(Produto, produto_id )
        if produto:
            session.delete(produto)
            session.commit()
            return {"mensagem": "Produto excluído com sucesso"}
        return {"mensagem": "Produto não encontrado"}