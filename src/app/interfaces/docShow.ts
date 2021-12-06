import { Materia } from "./materia";
import { Rating } from "./rating";
import { Tag } from "./tag";
import { Usuario } from "./usuario";

export interface DocShow {
    idDoc:number;
    nombreDoc:string;
    fechaDoc:string;
    materia:Materia;
    imgUrl:string;
    tags:Tag[]
    rating:Rating;
    usuarios:Usuario[];
    usuarioPrincipal:Usuario;
}
