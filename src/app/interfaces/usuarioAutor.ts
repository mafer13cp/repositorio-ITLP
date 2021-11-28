import { Usuario } from "./usuario";

export interface UsuarioAutor {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    autores: Usuario[]; //un usuario puede tener muchos documentos.
}
