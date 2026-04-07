
const { Router } = require('express')
const { signup } = require('./userService')
const router = Router()

router.post('/signup', (req, res) => {
  // basicamente, o 'answer' recebe o retorno da funcao signup e ja joga a resposta no send
  // to usando o signup direto assim, pois como usei chaves la em cima ao exportar, ele trouxe direto o metodo
  try {
    const answer = signup(req.body)
    res.send(answer)
  } catch (err) {
    if (err.message === 'email_existente')
      res.status(400).send(err.message)
    console.log(err)
    
    res.status(500).send(err.message)
  }

  
})

router.post('/login', (req, res) => {
  res.send('LOGIN /')
})

router.get('/test', (req, res) => {
  res.send('USER TEST /')
})

module.exports = router