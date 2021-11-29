import { Tag } from "./tag";

export interface DocumentoTagDocTag {
    id: number;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    tagDocTags: Tag[]; //un documento tiene muchos tags.
}
