<div align="center">

# 🎸 OBSCURION STORE

> *E-commerce com alma — onde a arquitetura encontra o rock.*

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blueviolet?style=flat-square)](https://github.com/Matt0820/Obscurion-store)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![SQLite](https://img.shields.io/badge/banco-SQLite-003B57?style=flat-square&logo=sqlite)](https://www.sqlite.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📌 Sobre o Projeto

**Obscurion Store** é um projeto pessoal desenvolvido para demonstrar habilidades em desenvolvimento full-stack, com foco principal em **back-end, arquitetura de APIs, modelagem de banco de dados e integração entre serviços**.

A ideia surgiu da vontade de criar algo com identidade própria: um e-commerce temático voltado ao universo do **rock e metal** — estética sombria, funcionalidade real, código sólido.

O front-end foi construído com auxílio de inteligência artificial para acelerar a parte visual da aplicação, deixando espaço para aprofundar o que realmente importa: **lógica de negócio, escalabilidade e boas práticas de engenharia**.

---

## 🎯 Objetivos

Este projeto é um laboratório prático de conceitos reais usados em produção:

- Autenticação e autorização de usuários
- Arquitetura back-end modular e escalável
- Modelagem e persistência de dados
- Criação e consumo de APIs REST
- Integração entre serviços
- Segurança em aplicações web
- Separação de responsabilidades (Clean Architecture / camadas)
- Organização de código para projetos de médio/grande porte

Além de portfólio técnico, o projeto serve como forma de **expressar personalidade através da tecnologia**.

---

## 🛠️ Stack Tecnológica

### Front-end
| Tecnologia | Uso |
|---|---|
| [Next.js](https://nextjs.org/) + React | Framework principal, SSR e roteamento |
| [TailwindCSS](https://tailwindcss.com/) | Estilização utilitária |
| Node.js | Runtime e tooling |

### Back-end
| Tecnologia | Uso |
|---|---|
| [Python](https://www.python.org/) + [FastAPI](https://fastapi.tiangolo.com/) | API principal, regras de negócio |
| [Express.js](https://expressjs.com/) | Serviços auxiliares / microsserviços |

### Banco de Dados
| Tecnologia | Uso |
|---|---|
| [SQLite](https://www.sqlite.org/) | Persistência de dados |

---

## 🗂️ Estrutura do Projeto

```
obscurion-store/
├── frontend/          # Next.js + React + Tailwind
├── backend/           # FastAPI (Python)
│   ├── api/
│   ├── models/
│   ├── services/
│   └── database/
├── services/          # Express.js (serviços auxiliares)
└── README.md
```

> A estrutura pode evoluir conforme o projeto cresce.

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- Python 3.11+
- npm ou yarn

### Front-end

```bash
cd frontend
npm install
npm run dev
```

### Back-end (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Serviços (Express)

```bash
cd services
npm install
npm run dev
```

---

## 🔮 Roadmap

- [ ] Catálogo de produtos
- [ ] Autenticação (JWT)
- [ ] Carrinho de compras
- [ ] Sistema de pedidos
- [ ] Painel administrativo
- [ ] Integração com gateway de pagamento
- [ ] Deploy em produção

---

## 👤 Autor

Desenvolvido por **[Matt0820](https://github.com/Matt0820)** — projeto pessoal de portfólio.

---

<div align="center">
  <sub>Feito com 🤘 e muito café</sub>
</div>
