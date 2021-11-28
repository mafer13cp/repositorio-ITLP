export interface Usuario {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:string; //O num??
    fk_rol: string;
    fk_carrera: string;
}
