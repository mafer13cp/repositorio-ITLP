import { ComentarioUsuario } from "./comentarioUsuario";

export interface DocumentoComentarioUsuario {
    id: number;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    comentario_usuario: ComentarioUsuario[]; //un documento puede tener muchos usuarios que comentaron. 
}
