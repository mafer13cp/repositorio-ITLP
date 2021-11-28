import { TagDocTag } from "./tagDocTag";

export interface DocumentoTagDocTag {
    id: string;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    tagDocTags: TagDocTag; //un documento tiene muchos tags.
}
