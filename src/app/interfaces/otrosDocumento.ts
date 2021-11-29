import { Documento } from "./documento";

export interface OtrosDocumento {
    id: number;
    nombre: string;
    fk_documento: number;
    documento: Documento; //un usuario no registrado solo esta asociado a un documento.
}
