const express = require('express')
const cookieParser = require('cookie-parser')


const app = express()
const port = 3000

const userController = require('./modules/user/userController')
const postController = require('./modules/post/postController')

//Preciso disso para usar JSON nas requisições
app.use(express.json())
app.use(cookieParser())

//Coloquei o "userController" diretão assim, pois o codigo entendde que, a rota ficaria "/user/(qualqer rota dentro da controller)"
app.use('/user', userController)
app.use('/post', postController)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})