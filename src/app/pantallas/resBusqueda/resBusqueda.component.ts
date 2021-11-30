import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/documento';
import { DocumentoAutorUsuario } from 'src/app/interfaces/documentoAutorUsuario';
import { MateriaDocumento } from 'src/app/interfaces/materiaDocumento';
import { TagTagDocDocumento } from 'src/app/interfaces/tagTagDocDocumento';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';

@Component({
  selector: 'resBusqueda',
  templateUrl: './resBusqueda.component.html',
  styleUrls: ['./resBusqueda.component.css']
})
export class ResBusquedaComponent implements OnInit {
  filtro:string;
  texto:string;
  documentos:Documento[]; //Filtro por documentos.
  documentosAutor:UsuarioAutorDocumento; //Filtro por autor.
  documentosMateria:MateriaDocumento;//Filtro por materia
  documentosTag:TagTagDocDocumento; //Filtro por etiqueta
  documentosUsuario:DocumentoAutorUsuario[]; //Documentos con su usuario asociado.

  constructor() { }

  ngOnInit(): void {
  }

  ngRecibirFiltro(filtro:string){
    this.filtro = filtro;
  }

  ngRecibirTexto(texto:string){
    this.texto = texto;
    //Aqui se realiza la consulta
    if(this.filtro == null){
      console.log("DEBE SELECCIONAR UN FILTRO ERROR");
    }
      else{
      if(this.filtro == "Documentos"){
        console.log(this.filtro);
        console.log(texto);
        //aqui documentos se iguala a la consulta de los documentos.
      }
      else if(this.filtro == "Autores"){
        console.log(this.filtro);
        console.log(texto);
        //la consulta se asigna a documentosAutor, hacer el método que consulte Documentos de un usuario que reciba el nombre del usuario.
        //aqui documentos se iguala a documentos_usuario de documentosAutor
      }
      else if(this.filtro == "Materias"){
        console.log(this.filtro);
        console.log(texto);
        //la consulta se asigna a documentosMateria, hacer el método que consulte Documentos de una materia que reciba el nombre de la materia.
        //aqui documentos se iguala a documentos_materia de documentosMateria
      }
      else if(this.filtro == "Etiquetas"){
        console.log(this.filtro);
        console.log(texto);
        //la consulta se asigna a documentosTag, hacer el método que consulte Documentos de un tag que reciba el nombre del tag.
        //aqui documentos se iguala a documentos_tag de documentosTag
      }
      if(this.documentos != null){
      //realizar la consulta de los usuarios para cada documento y rellenar el documentosUsuario.
        for(let i = 0; i < this.documentos.length; i++){
          //this.documentosUsuario[i] = consulta del usuario de documentos[i] definir la consulta que devuelva un documentoUsuarios segun su id de doc.
        }
      }
      else{
        console.log("ERROR NO SE ENCONTRARON COINCIDENCIAS");
      }
    }
  }
}
