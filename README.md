<div align="center">

# 🎸 OBSCURION STORE

> *E-commerce com alma — onde a arquitetura encontra o rock.*

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blueviolet?style=flat-square)](https://github.com/Matt0820/Obscurion-store)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![SQLite](https://img.shields.io/badge/banco-SQLite-003B57?style=flat-square&logo=sqlite)](https://www.sqlite.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📌 Sobre o Projeto

**Obscurion Store** é um projeto full-stack de e-commerce temático voltado ao universo do rock e metal, com foco em back-end, API REST, banco de dados e integração com front-end.

A interface mantém a estética sombria original, mas agora evita produtos “fantasma”: a listagem da homepage e da página de produtos usa a API como fonte principal.

---

## 🛠️ Stack

### Front-end

- Next.js + React
- TailwindCSS
- Zustand para carrinho local

### Back-end

- Python
- FastAPI
- SQLModel
- SQLite

---

## 🗂️ Estrutura atual

```txt
Obscurion/
├── backend/                  # FastAPI + SQLite
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── main.py
│   └── obscurion.db
├── frontend/                 # Next.js
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── data/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── store/
│   │   └── types/
│   ├── package.json
│   └── tsconfig.json
├── iniciar.bat
└── README.md
```

---

## 🚀 Como rodar localmente

### Back-end

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

A API sobe por padrão em:

```txt
http://localhost:8000
```

### Front-end

```bash
cd frontend
npm install
npm run dev
```

O front-end busca a API em `http://localhost:8000` por padrão.

Para mudar a URL da API, crie um arquivo `.env.local` dentro de `frontend/`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 🔧 Ajustes feitos nesta refatoração

- Homepage deixou de usar produtos mockados como fonte principal.
- Página `/products` passou a consumir produtos normalizados vindos da API.
- Página de detalhe passou a buscar produto pelo ID presente no slug.
- API do front foi centralizada em `src/lib/api.ts`.
- Variáveis problemáticas foram renomeadas para nomes mais claros.
- Estrutura do front foi organizada em `frontend/src/`.
- Pastas raiz foram simplificadas para `frontend/` e `backend/`.
- Caminho do SQLite foi fixado para evitar criação de banco em local errado.

---

<div align="center">
  <sub>Feito com 🤘 e muito café</sub>
</div>
