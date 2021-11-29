import { Usuario } from "./usuario";

export interface DocumentoAutorUsuario {
    id: number;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    autoresUsuario:Usuario[]; //Autores registrados que son autores del documento. 
}
