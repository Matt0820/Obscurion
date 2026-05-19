from sqlmodel import Session, select
from database.database import engine
from models.carrinho import Carrinho

def criar_carrinho(carrinho: Carrinho):
    with Session(engine) as session:
        session.add(carrinho)
        session.commit()
        session.refresh(carrinho)
        return carrinho
def listar_carrinho():
    with Session(engine) as session:
        carrinho = session.exec(select(Carrinho)).all()
        return carrinho
def excluir_carrinho(carrinho_id: int):
    with Session(engine) as session:
        carrinho = session.get(Carrinho, carrinho_id)
        if carrinho:
            session.delete(carrinho)
            session.commit()
            return {"mensagem": "Carrinho excluído com sucesso"}
        return {"mensagem": "Carrinho não encontrado"}
