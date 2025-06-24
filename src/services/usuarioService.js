import {
  usuarios,
  idCounter as initialIdCounter,
} from "../models/usuarioModel";

let currentId = initialIdCounter

export const crearUsuario = (datos) => {
  const nuevoUsuario = { id: currentId++, ...datos };
  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}

export const iniciarSesion = (email, contrasena) => {
  const usuario = usuarios.find(u => u.email === email && u.contrasena === contrasena);
  if (!usuario) throw new Error('Usuario o contraseña incorrectos');
  return usuario;
}

export const obtenerUsuarios = () => {
  return usuarios;
}