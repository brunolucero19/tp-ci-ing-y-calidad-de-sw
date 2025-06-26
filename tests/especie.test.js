import {
  listarEspecies,
  crearEspecie,
  modificarEspecie,
  eliminarEspecie,
  validarCampos,
} from '../src/services/especieService.js';

describe('Gestión de EspeciePato', () => {
  // Test N°1
  test('Debe listar las 3 especies iniciales', () => {
    const lista = listarEspecies();
    expect(lista.length).toBeGreaterThanOrEqual(3);
  });

  // Test N°2
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
      origenAlimento: 'Vegetal',
      coloresPlumaje: ['#0000ff'],
      imagenes: ['pato4.jpg'],
    });
    expect(nueva.id).toBeDefined();
    expect(nueva.nombre).toBe('Pato Azul');
  });

  // Test N°3
  test('Debe modificar una especie existente', () => {
    const especie = crearEspecie({
      nombre: 'A cambiar',
      nombreCientifico: 'Anas x',
    });
    const modificado = modificarEspecie(especie.id, { nombre: 'Nombre Nuevo' });
    expect(modificado.nombre).toBe('Nombre Nuevo');
  });

  // Test N°4
  test('Debe eliminar una especie existente', () => {
    const especie = crearEspecie({
      nombre: 'A borrar',
      nombreCientifico: 'Anas borrar',
    });
    const fueEliminada = eliminarEspecie(especie.id);
    expect(fueEliminada).toBe(true);
  });

  //Test N°5 --> Validar campos enviado , para utilizarlo en crear una especie por ejemplo
  test('Validar campos obligatorios', () => {
    expect(() => {
      validarCampos({
        nombre: 'Pato prueba',
        tamaño: 'Grande',
        tipoVuelo: 'Ligero',
        tipoSonido: 'Grave',
        habitat: 'Lagos',
        ubicacionGeografica: 'América del Sur',
        alimentos: ['Semillas', 'Trigo'],
        origenAlimento: 'Vegetal',
        coloresPlumaje: ['#000'],
        imagenes: ['pato.jpg'],
      });
    }).toThrow('El nombre científico es obligatorio');
  });

  //Test N°6 --> No modifcar especie inexistete
  test('No modificar especie inexistente', () => {
    expect(() =>
      modificarEspecie(123456, { nombre: 'pato modificado' })
    ).toThrow('Especie no encontrada');
  });

  // Test N°7 --> No eliminar especie inexistente
  test('No eliminar una especie inexistente', () => {
    const especieEliminada = eliminarEspecie(123456);
    expect(especieEliminada).toBe(false);
  });
});

//Test N°8 y N°9 en "usuario.test.js"

  // Test N°10 - Octavio
  test('El alimento ALGAS debe ser VEGETAL', () => {
    const especie = crearEspecie({
      nombre: 'Pato Algas',
      nombreCientifico: 'Anas algas',
      tamaño: 'Pequeño',
      tipoVuelo: 'Ligero',
      tipoSonido: 'Chillido',
      habitat: 'Pantanos',
      ubicacionGeografica: 'Centroamérica',
      alimentos: ['Algas'],
      origenAlimento: 'Vegetal',
      coloresPlumaje: ['#00ff00'],
      imagenes: ['pato5.jpg'],
    });
    expect(especie.origenAlimento).toBe('Vegetal');
  });


  //Test N°11 Validar campos enviado, nombre
  test('Validar nombre', () => {
    expect(() => {
      validarCampos({
        nombreCientifico: 'Anas algas',
        tamaño: 'Grande',
        tipoVuelo: 'Ligero',
        tipoSonido: 'Grave',
        habitat: 'Lagos',
        ubicacionGeografica: 'América del Sur',
        alimentos: ['Semillas', 'Trigo'],
        origenAlimento: 'Vegetal',
        coloresPlumaje: ['#000'],
        imagenes: ['pato.jpg'],
      });
    }).toThrow('El nombre es obligatorio');
  });

  //Test N°12 Validar campos enviado, tamaño
  test('Validar campos obligatorios', () => {
    expect(() => {
      validarCampos({
        nombre: 'Pato prueba',
        nombreCientifico: 'Anas algas',
        tipoVuelo: 'Ligero',
        tipoSonido: 'Grave',
        habitat: 'Lagos',
        ubicacionGeografica: 'América del Sur',
        alimentos: ['Semillas', 'Trigo'],
        origenAlimento: 'Vegetal',
        coloresPlumaje: ['#000'],
        imagenes: ['pato.jpg'],
      });
    }).toThrow('El tamaño es obligatorio');
  });

  //Test N°13 Validar campos enviado, tipoVuelo
  test('Validar campos obligatorios', () => {
    expect(() => {
      validarCampos({
        nombre: 'Pato prueba',
        nombreCientifico: 'Anas algas',
        tamaño: 'Grande',
        tipoSonido: 'Grave',
        habitat: 'Lagos',
        ubicacionGeografica: 'América del Sur',
        alimentos: ['Semillas', 'Trigo'],
        origenAlimento: 'Vegetal',
        coloresPlumaje: ['#000'],
        imagenes: ['pato.jpg'],
      });
    }).toThrow('El tipo de vuelo es obligatorio');
  });
