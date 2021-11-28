import { MateriaDocumento } from "./materiaDocumento";

export interface CarreraMateriaDocumento {
    id: string;
    siglas: string;
    nombre: string;
    materiaDocumentos:MateriaDocumento[]; //Una carrera puede tener varios documentos.
}
