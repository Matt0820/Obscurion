class Cliente:
    def __init__(self,id,nome,email,telefone,cep):
        self.id = id
        self.nome = nome
        self.email = email
        self.telefone = telefone
        self.cep = cep
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'email': self.email,
            'telefone': self.telefone,
            'cep': self.cep
        }