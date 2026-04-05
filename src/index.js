const express = require('express')
const app = express()
const port = 3000

const userController = require('./controller/userController')
const postController = require('./controller/postController')

//Coloquei o "userController" diretão assim, pois o codigo entendde que, a rota ficaria "/user/(qualqer rota dentro da controller)"
app.use('/user', userController)
app.use('/post', postController)


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})