from sqlmodel import Session, select
from models.cliente import Cliente
from database.database import engine


def criar_cliente(cliente: Cliente):
    with Session(engine) as session:
        session.add(cliente)
        session.commit()
        session.refresh(cliente)
        return cliente


def listar_clientes():
    with Session(engine) as session:
        return session.exec(select(Cliente)).all()


def selecionar_cliente(cliente_id: int):
    with Session(engine) as session:
        cliente = session.get(Cliente, cliente_id)
        return cliente


def filtrar_clientes(nome: str):
    with Session(engine) as session:
        query = select(Cliente).where(Cliente.nome.contains(nome))
        return session.exec(query).all()


def excluir_cliente(cliente_id: int):
    with Session(engine) as session:
        cliente = session.get(Cliente, cliente_id)
        if cliente:
            session.delete(cliente)
            session.commit()
            return {"mensagem": "Cliente excluído com sucesso"}
        return {"mensagem": "Cliente não encontrado"}