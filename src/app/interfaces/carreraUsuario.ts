import { Usuario } from "./usuario";

export interface CarreraUsuario {
    id: string;
    siglas: string;
    nombre: string;
    usuarios: Usuario[]; //Una carrera puede tener varios usuarios.
}
