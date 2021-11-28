import { Carrera } from "./carrera";

export interface MateriaCarrera {
    id: string;
    nombre: string;
    fk_carrera: string;
    carrera:Carrera; //una materia pertenece a una carrera.
}
