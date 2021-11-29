import { Comentario } from "./comentario";

export interface DocumentoComentario {
    id: number;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    comentarios: Comentario[]; //un documento puede tener muchos comentarios.
}
