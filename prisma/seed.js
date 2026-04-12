//Seed para inicar a alimentação do banco de dados para não ficar muito cru

require('dotenv').config()

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // To usando essas duas Roles que seria pra mim os padrões
  const adminRole = await prisma.role.create({
    data: { nome: 'ADMIN' }
  })

  const clienteRole = await prisma.role.create({
    data: { nome: 'CLIENTE' }
  })

  // Inserindo o primeiro usuario 
  const usuario = await prisma.usuario.create({
    data: {
      nome: 'Thiago Afonso RU: 4673653',
      email: 'thiago@email.com',
      senha: '123456', 
      roleId: adminRole.id
    }
  })

  // Unidade da Raizes do Nordeste
  const unidade = await prisma.unidade.create({
    data: {
      nome: 'Unidade Centro',
      endereco: 'Centro'
    }
  })

  // Primeiros produtos
  const produto1 = await prisma.produto.create({
    data: {
      nome: 'X-Tudao',
      preco: 25.0
    }
  })

  const produto2 = await prisma.produto.create({
    data: {
      nome: 'Coca-Cola zero',
      preco: 12.0
    }
  })

  // Aqui faz o estoque dos primeiros produtos
  await prisma.estoque.createMany({
    data: [
      {
        produtoId: produto1.id,
        unidadeId: unidade.id,
        quantidade: 10
      },
      {
        produtoId: produto2.id,
        unidadeId: unidade.id,
        quantidade: 20
      }
    ]
  })
}

main()
  .then(() => {
    console.log('Seed executado!')
  })
  .catch(e => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })