import { Otro } from "./otros";

export interface DocumentoOtros {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    fk_materia: string;
    otros_documento:Otro[]; //un documento puede tener muchos autores no registrados.
}
