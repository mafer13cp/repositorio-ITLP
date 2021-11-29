import { ComentarioDocumento } from "./comentarioDocumento";

export interface UsuarioComentarioDocumento {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    comentarios_usuario: ComentarioDocumento[]; //un usuario puede comentar muchas veces en un mismo documentos.
}
