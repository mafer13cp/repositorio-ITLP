import { Usuario } from "./usuario";

export interface RatingUsuario {
    id: string;
    calificacion: number;
    fk_documento: string;
    fk_usuario: string;
    usuario: Usuario; //un voto solo pertenece a un usuario.
}
