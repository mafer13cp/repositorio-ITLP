import { Usuario } from "./usuario";

export interface DocumentoAutorUsuario {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    imgUrl: string;
    fk_materia: string;
    fecha:string;
    usuarios_documento:Usuario[]; //Autores registrados que son autores del documento. 
}
