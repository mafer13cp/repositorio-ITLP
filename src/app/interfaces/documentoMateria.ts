import { Materia } from "./materia";

export interface DocumentoMateria {
    id: string;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    materia: Materia; //Un documento pertenece a una materia.
}
