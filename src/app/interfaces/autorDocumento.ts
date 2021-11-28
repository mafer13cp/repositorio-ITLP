import { Documento } from "./documento";

export interface AutorDocumento {
    id: string;
    fk_usuario: string;
    fk_documento: string;
    documentos: Documento[]; //un autor puede tener muchos documentos.
}
