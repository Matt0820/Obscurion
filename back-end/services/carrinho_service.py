from sqlmodel import Session, select
from database.database import engine
from models.carrinho import Carrinho

def criar_carrinho(carrinho: Carrinho):
    with Session(engine) as session:
        session.add(carrinho)
        session.commit()
        session.refresh(carrinho)