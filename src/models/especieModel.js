export let especies = [
  {
    id: 1,
    nombre: 'Pato Criollo',
    nombreCientifico: 'Cairina moschata',
    tamaño: 'Grande',
    tipoVuelo: 'Pesado',
    tipoSonido: 'Grave',
    habitat: 'Lagunas',
    ubicacionGeografica: 'Sudamérica',
    alimentos: ['Insectos', 'Granos'],
    coloresPlumaje: ['#000000', '#ffffff'],
    imagenes: ['pato1.jpg'],
  },
  {
    id: 2,
    nombre: 'Pato Colorado',
    nombreCientifico: 'Netta peposaca',
    tamaño: 'Mediano',
    tipoVuelo: 'Rápido',
    tipoSonido: 'Agudo',
    habitat: 'Ríos',
    ubicacionGeografica: 'Argentina',
    alimentos: ['Plantas acuáticas'],
    coloresPlumaje: ['#ff0000'],
    imagenes: ['pato2.jpg'],
  }
]

export let idCounter = especies.length + 1;
