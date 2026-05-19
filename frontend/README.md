# Front-end Obscurion

Front-end em Next.js organizado dentro de `src/`.

## Fonte dos produtos

A listagem de produtos vem da API configurada em:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Sem `.env.local`, o padrão é `http://localhost:8000`.

## Rodar

```bash
npm install
npm run dev
```

## Pastas principais

```txt
src/
├── app/          # páginas e rotas Next.js
├── components/   # componentes visuais
├── data/         # dados estáticos pequenos, como categorias
├── hooks/        # hooks reaproveitáveis
├── lib/          # integrações e utilitários
├── store/        # estado local do carrinho
└── types/        # tipos TypeScript
```
