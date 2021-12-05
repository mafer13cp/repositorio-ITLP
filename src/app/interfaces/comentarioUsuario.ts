import { Usuario } from "./usuario";

export interface ComentarioUsuario {
    id: number;
    texto: string;
    fk_documento: number;
    fk_usuario: string;
    fecha:string;
    comentario_usuario: Usuario; //un comentario pertenece a un usuario.
}
