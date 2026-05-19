from pathlib import Path

from sqlmodel import SQLModel, create_engine

BASE_DIR = Path(__file__).resolve().parent.parent
DATABASE_PATH = BASE_DIR / "obscurion.db"
DATABASE_URL = f"sqlite:///{DATABASE_PATH}"

engine = create_engine(
    DATABASE_URL,
    echo=False,
    connect_args={"check_same_thread": False},
)


def criar_banco():
    SQLModel.metadata.create_all(engine)
