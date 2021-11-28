import { Documento } from "./documento";

export interface MateriaDocumento {
    id: string;
    nombre: string;
    fk_carrera: string;
    documentos: Documento[]; //una materia tiene muchos documentos.
}
