const { Router } = require('express')
const { verifyAccessToken } = require('../../utils/auth')
const { createPost, getPosts } = require('./postService')

const router = Router()

router.post('/', verifyAccessToken,(req, res) => {
  try {
    //Pasra os parametros vou usar o body da requisição e o user
    const post = createPost(req.body, req.user)
    res.status(200).send(post)
  } catch (err) {
    if ( err.message === 'post_nao_existe' )
      return res.status(400).send(err.message)

      res.status(500).send(err.message)
  }
})

router.get('/:id?', verifyAccessToken , (req, res) => {
  try {
    const posts = getPosts(req.params.id)
    res.status(200).send(posts)
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router