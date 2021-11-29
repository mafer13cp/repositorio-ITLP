import { MateriaCarrera } from "./materiaCarrera";

export interface DocumentoMateriaCarrera {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    fk_materia: string;
    documento_materia: MateriaCarrera; //un documento pertenece a una carrera.
}
