import express from 'express'
import especieRouter from './controllers/especieController.js'

const app = express()
app.use(express.json())
app.use('/especies', especieRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})
