import {
  listarEspecies,
  crearEspecie,
  modificarEspecie,
  eliminarEspecie,
} from "../src/services/especieService.js";

import { crearUsuario, iniciarSesion, obtenerUsuarios } from "../src/services/usuarioService.js";

describe("Gestión de EspeciePato", () => {
  // Test N°1
  test("Debe listar las 3 especies iniciales", () => {
    const lista = listarEspecies();
    expect(lista.length).toBeGreaterThanOrEqual(3);
  });

  // Test N°2
  test("Debe crear una nueva especie", () => {
    const nueva = crearEspecie({
      nombre: "Pato Azul",
      nombreCientifico: "Anas azulensis",
      tamaño: "Pequeño",
      tipoVuelo: "Ligero",
      tipoSonido: "Chillido",
      habitat: "Pantanos",
      ubicacionGeografica: "Centroamérica",
      alimentos: ["Algas"],
      coloresPlumaje: ["#0000ff"],
      imagenes: ["pato4.jpg"],
    });
    expect(nueva.id).toBeDefined();
    expect(nueva.nombre).toBe("Pato Azul");
  });

  // Test N°3
  test("Debe modificar una especie existente", () => {
    const especie = crearEspecie({
      nombre: "A cambiar",
      nombreCientifico: "Anas x",
    });
    const modificado = modificarEspecie(especie.id, { nombre: "Nombre Nuevo" });
    expect(modificado.nombre).toBe("Nombre Nuevo");
  });

  // Test N°4
  test("Debe eliminar una especie existente", () => {
    const especie = crearEspecie({
      nombre: "A borrar",
      nombreCientifico: "Anas borrar",
    });
    const fueEliminada = eliminarEspecie(especie.id);
    expect(fueEliminada).toBe(true);
  });
});

describe("Gestión de Usuarios", () => {
  // Test N°5 - Octavio
  test("Debe crear un nuevo usuario", () => {
    const usuario = crearUsuario({
      nombre: "Juan",
      Apellido: "Pérez",
      email:"Juan@Perez.com",
      contrasena: "123456",

    });
    expect(usuario.id).toBeDefined();
    expect(usuario.nombre).toBeDefined();
    expect(usuario.Apellido).toBeDefined();
    expect(usuario.email).toBeDefined();
    expect(usuario.contrasena).toBeDefined();
  });

  // Test N°6 - Octavio
  test(" Debe iniciar sesión con un usuario existente", () => {
    const usuario = iniciarSesion("Juan@Perez.com", "123456");
    expect(usuario.email).toBe("Juan@Perez.com");
    expect(usuario.contrasena).toBe("123456");
  });

  // Test N°7 - Octavio
  test("No deben existir usuarios con id repetidos", () => {
    const IDs = obtenerUsuarios().map(u => u.id);
    const IDsUnicos = new Set(IDs);
    expect(IDs.length).toBe(IDsUnicos.size);
  });

});
    
