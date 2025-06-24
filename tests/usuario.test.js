import {
  crearUsuario,
  iniciarSesion,
  obtenerUsuarios,
} from '../src/services/usuarioService.js';

describe('Gestión de Usuarios', () => {
  // Test N°8 - Octavio
  test('Debe iniciar sesión con un usuario existente', () => {
    const usuario = iniciarSesion('Juan@Perez.com', '123456');
    expect(usuario.email).toBe('Juan@Perez.com');
    expect(usuario.contrasena).toBe('123456');
  });

  // Test N°9 - Octavio
  test('No deben existir usuarios con id repetidos', () => {
    const IDs = obtenerUsuarios().map((u) => u.id);
    const IDsUnicos = new Set(IDs);
    expect(IDs.length).toBe(IDsUnicos.size);
  });
});
