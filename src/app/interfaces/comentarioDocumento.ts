import { Documento } from "./documento";

export interface ComentarioDocumento {
    id: number;
    texto: string;
    fk_documento: number;
    fk_usuario: string;
    comentario_documento:Documento[];
}
