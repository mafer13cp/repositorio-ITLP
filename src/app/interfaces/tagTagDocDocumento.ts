import { Documento } from "./documento";

export interface TagTagDocDocumento {
    id: number;
    nombre: string;
    documentos_tag: Documento[]; //un tag aparece en muchos documentos.
}
