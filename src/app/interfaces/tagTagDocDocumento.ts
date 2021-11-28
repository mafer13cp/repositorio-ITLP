import { TagDocDocumento } from "./tagDocDocumento";

export interface TagTagDocDocumento {
    id: string;
    nombre: string;
    tagDocDocumentos: TagDocDocumento[]; //un tag aparece en muchos documentos.
}
