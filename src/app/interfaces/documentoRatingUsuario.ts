import { RatingUsuario } from "./ratingUsuario";

export interface DocumentoRatingUsuario {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    fk_materia: string;
    ratings_documento: RatingUsuario[]; //un documento tiene votos de muchos usuarios.
}
