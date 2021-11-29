import { MateriaDocumento } from "./materiaDocumento";

export interface CarreraMateriaDocumento {
    id: string;
    siglas: string;
    nombre: string;
    carrera_materia:MateriaDocumento; //Una carrera puede tener varios documentos.
}
