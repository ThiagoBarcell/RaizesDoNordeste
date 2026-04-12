# Passos para rodar o projeto :

- Instalar todas as dependências com `npm i`
- Instalar o Webpack globalmente com `npm i -g webpack`
- Rodar localmente usando `npm run dev`

- O Prisma CLI foi utilizado como dependência de desenvolvimento para gerenciamento de migrations e schema, enquanto o Prisma Client é utilizado em tempo de execução para acesso ao banco.

## Banco de dados

1. Instale o PostgreSQL
2. Crie um banco chamado `RaizesDoNordesteDB`
3. Configure o arquivo `.env`
4. Rode:

npx prisma migrate dev