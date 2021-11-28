import { Usuario } from "./usuario";

export interface ComentarioUsuario {
    id: string;
    texto: string;
    fk_documento: string;
    fk_usuario: string;
    usuario: Usuario; //un comentario pertenece a un usuario.
}
