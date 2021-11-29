import { Usuario } from "./usuario";

export interface RolUsuario {
    id:number;
    nombre:string;
    usuarios_rol:Usuario[]; //un rol tiene muchos usuarios.
}
