import { Otro } from "./otros";

export interface DocumentoOtros {
    id: string;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    otros:Otro[]; //un documento puede tener muchos autores no registrados.
}
