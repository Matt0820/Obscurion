class Produto:
    def __init__(self, id_produto, nome, descricao, preco):
        self.id_produto = id_produto
        self.nome = nome
        self.descricao = descricao
        self.preco = preco

    def to_dict(self):
        return {
            'id_produto': self.id_produto,
            'nome': self.nome,
            'descricao': self.descricao,
            'preco': self.preco
        }