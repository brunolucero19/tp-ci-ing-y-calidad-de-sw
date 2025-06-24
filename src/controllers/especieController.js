import express from 'express'
import {
  listarEspecies,
  crearEspecie,
  modificarEspecie,
  eliminarEspecie,
} from '../services/especieService.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.json(listarEspecies())
})

router.post('/', (req, res) => {
  const nueva = crearEspecie(req.body)
  res.status(201).json(nueva)
})

router.put('/:id', (req, res) => {
  try {
    const actualizada = modificarEspecie(parseInt(req.params.id), req.body)
    res.json(actualizada)
  } catch (err) {
    res.status(404).json({ error: err.message })
  }
})

router.delete('/:id', (req, res) => {
  const eliminada = eliminarEspecie(parseInt(req.params.id))
  if (!eliminada) return res.status(404).json({ error: 'No se pudo eliminar' })
  res.status(204).send()
})

export default router
