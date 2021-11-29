import { Documento } from "./documento";

export interface TagTagDocDocumento {
    id: number;
    nombre: string;
    tagDocDocumentos: Documento[]; //un tag aparece en muchos documentos.
}
