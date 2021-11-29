import { Usuario } from "./usuario";

export interface RatingUsuario {
    id: number;
    calificacion: number;
    fk_documento: number;
    fk_usuario: string;
    usuario: Usuario; //un voto solo pertenece a un usuario.
}
