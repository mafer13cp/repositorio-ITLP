import { AutorDocumento } from "./autorDocumento";

export interface UsuarioAutorDocumento {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    autorDocumentos: AutorDocumento[]; //un usuario puede tener muchos documentos.
}
