export interface Documento {
    id: string;
    fk_usuario: string;
    fk_materia: string;
    descripción: string;
    archivoUrl: string;
}
