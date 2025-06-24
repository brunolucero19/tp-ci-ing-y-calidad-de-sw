import {
  listarEspecies,
  crearEspecie,
  modificarEspecie,
  eliminarEspecie,
} from '../src/services/especieService.js'

describe('Gestión de EspeciePato', () => {
  test('Debe listar las 3 especies iniciales', () => {
    const lista = listarEspecies()
    expect(lista.length).toBeGreaterThanOrEqual(3)
  })

  test('Debe crear una nueva especie', () => {
    const nueva = crearEspecie({
      nombre: 'Pato Azul',
      nombreCientifico: 'Anas azulensis',
      tamaño: 'Pequeño',
      tipoVuelo: 'Ligero',
      tipoSonido: 'Chillido',
      habitat: 'Pantanos',
      ubicacionGeografica: 'Centroamérica',
      alimentos: ['Algas'],
      coloresPlumaje: ['#0000ff'],
      imagenes: ['pato4.jpg'],
    })
    expect(nueva.id).toBeDefined()
    expect(nueva.nombre).toBe('Pato Azul')
  })

  test('Debe modificar una especie existente', () => {
    const especie = crearEspecie({
      nombre: 'A cambiar',
      nombreCientifico: 'Anas x',
    })
    const modificado = modificarEspecie(especie.id, { nombre: 'Nombre Nuevo' })
    expect(modificado.nombre).toBe('Nombre Nuevo')
  })

  test('Debe eliminar una especie existente', () => {
    const especie = crearEspecie({
      nombre: 'A borrar',
      nombreCientifico: 'Anas borrar',
    })
    const fueEliminada = eliminarEspecie(especie.id)
    expect(fueEliminada).toBe(true)
  })
})
