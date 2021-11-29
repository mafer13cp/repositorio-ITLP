import { CarreraMateria } from "./carreraMateria";

export interface UsuarioCarreraMateria {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    usuario_carrera: CarreraMateria; //un usuario puede participar en varias materias.
}
