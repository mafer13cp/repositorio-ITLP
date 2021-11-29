import { ComentarioDocumento } from "./comentarioDocumento";

export interface UsuarioComentarioDocumento {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    comentario_documento: ComentarioDocumento[]; //un usuario puede comentar muchas veces en un mismo documentos.
}
