import { ComentarioUsuario } from "./comentarioUsuario";

export interface DocumentoComentarioUsuario {
    id: string;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    comentarioUsuarios: ComentarioUsuario[]; //un documento puede tener muchos usuarios que comentaron. 
}
