class Carrinho:
    def __init__(self, id_carrinho, id_usuario):
        self.id_carrinho = id_carrinho
        self.id_usuario = id_usuario
    def to_dict(self):
        return {
            'id_carrinho': self.id_carrinho,
            'id_usuario': self.id_usuario
        }