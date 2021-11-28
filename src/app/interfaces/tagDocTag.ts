import { Tag } from "./tag";

export interface TagDocTag {
    id: string;
    fk_documento: string;
    fk_tag: string;
    tags: Tag[]; //un tag puede aparecer muchas veces en diferentes documentos.
}
