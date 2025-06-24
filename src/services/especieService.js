import {
  especies,
  idCounter as initialIdCounter,
} from '../models/especieModel.js';

let currentId = initialIdCounter;

export const listarEspecies = () => especies;

export const crearEspecie = (datos) => {
  const nueva = { id: currentId++, ...datos };
  especies.push(nueva);
  return nueva;
};

export const modificarEspecie = (id, cambios) => {
  const index = especies.findIndex((e) => e.id === id);
  if (index === -1) throw new Error('Especie no encontrada');
  especies[index] = { ...especies[index], ...cambios };
  return especies[index];
};

export const eliminarEspecie = (id) => {
  const index = especies.findIndex((e) => e.id === id);
  if (index === -1) return false;
  especies.splice(index, 1);
  return true;
};

export const validarCampos = (datos) => {
  if (!datos.nombre || datos.nombre.trim() === '') {
    throw new Error('El nombre es obligatorio');
  }
  if (!datos.nombreCientifico || datos.nombreCientifico.trim() === '') {
    throw new Error('El nombre científico es obligatorio');
  }
  if (!datos.tamaño || datos.tamaño.trim() === '') {
    throw new Error('El tamaño es obligatorio');
  }
  if (!datos.tipoVuelo || datos.tipoVuelo.trim() === '') {
    throw new Error('El tipo de vuelo es obligatorio');
  }
  if (!datos.tipoSonido || datos.tipoSonido.trim() === '') {
    throw new Error('El tipo de sonido es obligatorio');
  }
  if (!datos.habitat || datos.habitat.trim() === '') {
    throw new Error('El hábitat es obligatorio');
  }
  if (!datos.ubicacionGeografica || datos.ubicacionGeografica.trim() === '') {
    throw new Error('La ubicación geográfica es obligatoria');
  }
  if (!Array.isArray(datos.alimentos) || datos.alimentos.length === 0) {
    throw new Error('Los alimentos deben ser un array no vacío');
  }
  if (!datos.origenAlimento || datos.origenAlimento.trim() === '') {
    throw new Error('El origen del alimento es obligatorio');
  }
  if (
    !Array.isArray(datos.coloresPlumaje) ||
    datos.coloresPlumaje.length === 0
  ) {
    throw new Error('Los colores de plumaje deben ser un array no vacío');
  }
  if (!Array.isArray(datos.imagenes) || datos.imagenes.length === 0) {
    throw new Error('Las imágenes deben ser un array no vacío');
  }
};
