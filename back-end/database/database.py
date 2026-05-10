from sqlmodel import SQLModel, create_engine

#caminho do banco de dados SQLite
DATABASE_URL = "sqlite:///obscurion.db"

#cria a conexão com o banco de dados
engine = create_engine(DATABASE_URL, echo=True)

#cria as tabelas no banco de dados baseado nos models
def criar_banco():
    SQLModel.metadata.create_all(engine)