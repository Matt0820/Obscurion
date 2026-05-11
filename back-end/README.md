# Back-end Obscurion

O **Back-end Obscurion** é um projeto desenvolvido com foco em aprendizado prático de arquitetura back-end, integração com banco de dados e construção de APIs utilizando FastAPI.
O sistema simula um fluxo simples de e-commerce, permitindo cadastro de usuários, manipulação de produtos e gerenciamento de carrinho de compras.

Apesar dos desafios durante o desenvolvimento, principalmente na integração com o front-end, o projeto serviu como uma experiência importante para consolidar conceitos de desenvolvimento web, organização de rotas e comunicação com banco de dados.

---

# Tecnologias utilizadas

* Python
* FastAPI
* Uvicorn
* SQLite
* SQLAlchemy
* HTTP Requests

---

# Estrutura principal do projeto

O sistema possui alguns componentes essenciais para o funcionamento da aplicação:

## Rotas de serviço

As rotas são responsáveis pela comunicação entre cliente e servidor, permitindo operações como:

* Cadastro de clientes
* Manipulação de produtos
* Gerenciamento de carrinho
* Associação entre clientes e produtos

Exemplos de entidades presentes no projeto:

* Cliente
* Produto
* Carrinho

---

## Integração com banco de dados

O servidor foi desenvolvido utilizando **FastAPI** juntamente com **Uvicorn**, permitindo a execução da aplicação e integração com o banco SQLite.

O banco de dados é responsável pelo armazenamento de:

* Usuários cadastrados
* Produtos disponíveis
* Dados do carrinho
* Informações de compra

---

## Serviços HTTP

O sistema utiliza métodos HTTP para manipulação de dados, como:

* `GET`
* `POST`
* `DELETE`

Esses serviços permitem realizar operações básicas da API de forma organizada e escalável.

---

# Fluxo padrão do usuário

Embora não exista um fluxo fixo, normalmente o usuário percorre o seguinte caminho:

```txt
Usuário entra no sistema
    ↓
Realiza o cadastro
    ↓
Navega pelo website
    ↓
Adiciona produtos ao carrinho
    ↓
Preenche um formulário simples
    ↓
Finaliza a compra
```

---

# Sobre o front-end

Atualmente, o principal desafio do projeto está na integração do front-end com o back-end.

Grande parte da interface foi construída com auxílio de IA Generativa, o que acelerou o desenvolvimento inicial, porém acabou gerando problemas de manutenção, padronização e integração entre os componentes.

Por esse motivo, existe a possibilidade de uma reestruturação completa do front-end futuramente, visando:

* Melhor organização de código
* Componentização adequada
* Maior integração com a API
* Facilidade de manutenção
* Escalabilidade do projeto

---

# Objetivo do projeto

Este projeto foi criado principalmente para:

* Consolidar conhecimentos em desenvolvimento back-end
* Aprender arquitetura de APIs
* Trabalhar com integração de banco de dados
* Entender fluxos de autenticação e manipulação de dados
* Melhorar organização de projetos reais

---

# Status do projeto

🚧 Em desenvolvimento.
O back-end está funcional, enquanto o front-end passa por possíveis melhorias estruturais e reescrita parcial.
