import { Materia } from "./materia";

export interface DocumentoMateria {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    fk_materia: string;
    documento_materia: Materia; //Un documento pertenece a una materia.
}
