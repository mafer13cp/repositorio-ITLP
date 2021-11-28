import { Usuario } from "./usuario";

export interface AutorUsuario {
    id: string;
    fk_usuario: string;
    fk_documento: string;
    usuario: Usuario; //un autor pertenece a un usuario.
}
