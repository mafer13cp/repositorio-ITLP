import { Comentario } from "./comentario";

export interface UsuarioComentario {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    comentarios: Comentario[]; //un usuario puede hacer muchos comentarios.
}
