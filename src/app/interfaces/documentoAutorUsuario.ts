import { AutorUsuario } from "./autorUsuario";

export interface DocumentoAutorUsuario {
    id: string;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    autoresUsuario:AutorUsuario[]; //Autores registrados que son autores del documento. 
}
