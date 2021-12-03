export interface Usuario {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    descripcion: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
}
