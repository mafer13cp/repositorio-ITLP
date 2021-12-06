export interface Documento {
    id: number;
    nombre: string;
    descripcion: string;
    archivoUrl: string;
    imgUrl: string;
    fecha:string;
    fk_materia: string;
}
