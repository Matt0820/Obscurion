# Back-end Obscurion

API do projeto **Obscurion Store**, feita com FastAPI, SQLModel e SQLite.

O back-end é a fonte principal dos produtos usados pelo front-end. Quando um produto não existe no banco, ele não deve aparecer na homepage nem na página de produtos.

---

## Rodar

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

A API sobe em:

```txt
http://localhost:8000
```

---

## Rotas principais

### Produtos

```txt
GET    /produto/
POST   /produto/
GET    /produto/{produto_id}/
DELETE /produto/{produto_id}/
```

### Clientes

```txt
GET    /cliente/
POST   /cliente/
GET    /cliente/{cliente_id}/
DELETE /cliente/{cliente_id}/
```

### Carrinho

```txt
GET    /carrinho/
POST   /carrinho/
DELETE /carrinho/{carrinho_id}/
```

---

## Banco de dados

O SQLite fica fixo em:

```txt
backend/obscurion.db
```

Isso evita o bug de criar outro banco vazio dependendo da pasta onde o `uvicorn` foi executado.

---

## Estrutura

```txt
backend/
├── database/      # conexão e criação das tabelas
├── models/        # modelos SQLModel
├── routes/        # endpoints FastAPI
├── services/      # regras de acesso ao banco
├── main.py
└── obscurion.db
```
