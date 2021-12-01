import { Rol } from "./rol";

export interface UsuarioRol {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    usuario_rol: Rol; //un usuario tiene un rol.
}
