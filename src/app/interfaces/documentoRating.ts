import { Rating } from "./rating";

export interface DocumentoRating {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    fk_materia: string;
    fecha:string;
    ratings_documento: Rating[]; //un doumento puede ser votado muchas veces.
}
