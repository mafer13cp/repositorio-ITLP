import { Documento } from "./documento";

export interface TagDocDocumento {
    id: string;
    fk_documento: string;
    fk_tag: string;
    documento: Documento; //un tag solo aparece una vez en un documento.
}
