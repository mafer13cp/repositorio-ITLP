import { Carrera } from "./carrera";

export interface UsuarioCarrera {
    id: string;
    nombre: string;
    correo: string;
    contrasena: string;
    imagen:number;
    fk_rol: number;
    fk_carrera: string;
    usuario_carrera:Carrera|null; //un usuario pertenece a una carrera.
}
