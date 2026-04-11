
const { Router } = require('express')
const { signup, login } = require('./userService')
const AUTH_COOKIE_NAME = 'authorization'
const router = Router()

router.post('/signup', (req, res) => {
  // basicamente, o 'answer' recebe o retorno da funcao signup e ja joga a resposta no send
  // to usando o signup direto assim, pois como usei chaves la em cima ao exportar, ele trouxe direto o metodo
  try {
    const token = signup(req.body)
    res.cookie(AUTH_COOKIE_NAME,token).status(201).send(token)
  } catch (err) {
    if (err.message === 'email_existente')
      res.status(400).send(err.message)
    console.log(err)
    
    res.status(500).send(err.message)
  }  
})

router.post('/login', (req, res) => {
  try{
    const token = login(req.body)
    res.cookie(AUTH_COOKIE_NAME,token).status(200).send(token)

  } catch (err) {
    if (err.message === 'email_nao_encontrado' || err.message === 'senha_incorreta')
      return res.status(400).send(err.message)
    res.status(500).send('')
  }
})

router.get('/test', (req, res) => {
  res.send('USER TEST /')
})

module.exports = router