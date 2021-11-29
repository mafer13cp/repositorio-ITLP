import { Documento } from "./documento";

export interface UsuarioAutorDocumento {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    documentos_usuario: Documento[]; //un usuario puede tener muchos documentos.
}
