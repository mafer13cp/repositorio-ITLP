import { Rating } from "./rating";

export interface UsuarioRating {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    ratings_usuario: Rating[]; //un usuario puede calificar muchos documentos.
}
