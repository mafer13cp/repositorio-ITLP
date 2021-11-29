import { Documento } from "./documento";

export interface RatingDocumento {
    id: number;
    calificacion: number;
    fk_documento: number;
    fk_usuario: string;
    documentos: Documento[]; //un documento puede ser votado muchas veces
}
