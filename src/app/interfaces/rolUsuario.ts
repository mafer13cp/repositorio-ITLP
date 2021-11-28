import { Usuario } from "./usuario";

export interface RolUsuario {
    id:number;
    nombre:string;
    usuarios:Usuario[]; //un rol tiene muchos usuarios.
}
