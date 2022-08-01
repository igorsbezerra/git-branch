import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
const port = process.env.PORT || 3333

app.get('/node', (req, res) => {
  console.log(req.url)
  return res.send('Hello, world!')
})

app.listen(port, () => console.log(`app running at ${port}`))
