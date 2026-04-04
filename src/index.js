const express = require('express')
const app = express()   
const port = 3000

app.get('/', (req, res) => {
  res.send('GET /')
})

app.post('/', (req, res) => {
  res.status(201).send('POST /')
})

app.put('/', (req, res) => {
  res.send('PUT /')
})

app.delete('/', (req, res) => {
  res.send('DELETE /')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})