import { Rating } from "./rating";

export interface DocumentoRating {
    id: number;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    ratings_documento: Rating[]; //un doumento puede ser votado muchas veces.
}
