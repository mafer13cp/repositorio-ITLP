import { RatingDocumento } from "./ratingDocumento";

export interface UsuarioRatingDocumento {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    rating_documento: RatingDocumento[]; //un usuario puede votar en varios documentos
}
