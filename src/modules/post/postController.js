const { Router } = require('express')
const { verifyAccessToken } = require('../../utils/auth')

const router = Router()

router.post('/', verifyAccessToken,(req, res) => {
  res.send('CREATE POST /')
})

router.get('/:id?', verifyAccessToken , (req, res) => {
  res.send('GET POST /')
})

module.exports = router