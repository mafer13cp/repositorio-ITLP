import { MateriaCarrera } from "./materiaCarrera";

export interface DocumentoMateriaCarrera {
    id: string;
    nombre: string;
    descripción: string;
    archivoUrl: string;
    fk_materia: string;
    materiaCarrera: MateriaCarrera; //un documento pertenece a una carrera.
}
