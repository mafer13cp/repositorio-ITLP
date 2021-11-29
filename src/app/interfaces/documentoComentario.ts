import { Comentario } from "./comentario";

export interface DocumentoComentario {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    fk_materia: string;
    comentarios_documento: Comentario[]; //un documento puede tener muchos comentarios.
}
