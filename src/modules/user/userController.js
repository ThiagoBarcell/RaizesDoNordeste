
const { Router } = require('express')
const { signup, login } = require('./userService')
const AUTH_COOKIE_NAME = 'authorization'
const router = Router()

router.post('/signup', async (req, res) => {
  try {
    const token = await signup(req.body)
    res.cookie(AUTH_COOKIE_NAME, token).status(201).send(token)
  } catch (err) {
    if (err.message === 'email_existente')
      return res.status(400).send(err.message)

    console.log(err)
    res.status(500).send(err.message)
  }
})

router.post('/login', async (req, res) => {
  try {
    const token = await login(req.body)
    res.cookie(AUTH_COOKIE_NAME, token).status(200).send(token)
  } catch (err) {
    if (
      err.message === 'email_nao_encontrado' ||
      err.message === 'senha_incorreta'
    )
      return res.status(400).send(err.message)

    res.status(500).send('')
  }
})

router.get('/test', (req, res) => {
  res.send('USER TEST /')
})

module.exports = router