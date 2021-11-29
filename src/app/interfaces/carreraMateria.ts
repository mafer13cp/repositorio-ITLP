import { Materia } from "./materia";

export interface CarreraMateria {
    id: string;
    siglas: string;
    nombre: string;
    materias_carrera: Materia[]; //Una carrera puede tener varias materias.
}
