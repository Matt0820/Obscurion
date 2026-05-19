#importando as libs necessarias para o desenvolvimento desse projeto
from sqlmodel import SQLModel, Field
from typing import Optional


#criando a classe produto, na qual cria um SQL com os atributos
class Cliente(SQLModel, table=True):
    #Aqui nao precisamos de um metodo construtor pois o SQL model ja faz isso
    #numero identificador
    id: Optional[int] = Field(default=None, primary_key=True)
    #atributos: autoexplicativo
    nome: str
    cpf: str
    endereco: str
    cep: str
    telefone: str
    email: str

