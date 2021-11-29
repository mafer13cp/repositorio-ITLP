import { ComentarioUsuario } from "./comentarioUsuario";

export interface DocumentoComentarioUsuario {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    fk_materia: string;
    comentarios_documento: ComentarioUsuario[]; //un documento puede tener muchos usuarios que comentaron. 
}
