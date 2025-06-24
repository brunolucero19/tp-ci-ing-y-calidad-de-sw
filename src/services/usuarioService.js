import {
  usuarios,
  idCounter as initialIdCounter,
} from "../models/usuarioModel";

let currentId = initialIdCounter

export const iniciarSesion = (email, contrasena) => {
  const usuario = usuarios.find(u => u.email === email)
  if (!usuario) throw new Error('Usuario no encontrado')
  if (usuario.contrasena !== contrasena) throw new Error('Contraseña incorrecta')
  return usuario
}


export const obtenerUsuarios = () => {
  return usuarios;
}