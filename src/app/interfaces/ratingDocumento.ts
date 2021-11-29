import { Documento } from "./documento";

export interface RatingDocumento {
    id: number;
    calificacion: number;
    fk_documento: number;
    fk_usuario: string;
    rating_documento: Documento; //un documento puede ser votado muchas veces
}
