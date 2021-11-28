import { Documento } from "./documento";

export interface OtrosDocumento {
    id: string;
    nombre: string;
    fk_documento: string;
    documento: Documento; //un usuario no registrado solo esta asociado a un documento.
}
