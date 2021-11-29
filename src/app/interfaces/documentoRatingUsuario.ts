import { RatingUsuario } from "./ratingUsuario";

export interface DocumentoRatingUsuario {
    id: number;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    ratingUsuarios: RatingUsuario[]; //un documento tiene votos de muchos usuarios.
}
