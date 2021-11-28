import { Documento } from "./documento";

export interface RatingDocumento {
    id: string;
    calificacion: number;
    fk_documento: string;
    fk_usuario: string;
    documentos: Documento[]; //un documento puede ser votado muchas veces
}
