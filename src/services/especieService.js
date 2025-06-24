import {
  especies,
  idCounter as initialIdCounter,
} from '../models/especieModel.js'

let currentId = initialIdCounter

export const listarEspecies = () => especies

export const crearEspecie = (datos) => {
  const nueva = { id: currentId++, ...datos }
  especies.push(nueva)
  return nueva
}

export const modificarEspecie = (id, cambios) => {
  const index = especies.findIndex((e) => e.id === id)
  if (index === -1) throw new Error('Especie no encontrada')
  especies[index] = { ...especies[index], ...cambios }
  return especies[index]
}

export const eliminarEspecie = (id) => {
  const index = especies.findIndex((e) => e.id === id)
  if (index === -1) return false
  especies.splice(index, 1)
  return true
}
