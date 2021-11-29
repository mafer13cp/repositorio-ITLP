import { MateriaCarrera } from "./materiaCarrera";

export interface DocumentoMateriaCarrera {
    id: number;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    materia_carrera: MateriaCarrera; //un documento pertenece a una carrera.
}
