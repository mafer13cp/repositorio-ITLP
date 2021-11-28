import { Rol } from "./Rol";

export interface UsuarioRol {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    rol: Rol; //un usuario tiene un rol.
}
