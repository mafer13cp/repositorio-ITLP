import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/documento';
import { DocumentoAutorUsuario } from 'src/app/interfaces/documentoAutorUsuario';
import { MateriaDocumento } from 'src/app/interfaces/materiaDocumento';
import { TagTagDocDocumento } from 'src/app/interfaces/tagTagDocDocumento';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { DocumentoService } from 'src/app/services/documento.service';
import { MateriaService } from 'src/app/services/materia.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'resBusqueda',
  templateUrl: './resBusqueda.component.html',
  styleUrls: ['./resBusqueda.component.css']
})
export class ResBusquedaComponent implements OnInit {
  filtro:string;
  texto:string;
  documentos:Documento[] = []; //Filtro por documentos.
  documentosAutor:UsuarioAutorDocumento; //Filtro por autor.
  documentosMateria:MateriaDocumento;//Filtro por materia
  documentosTag:TagTagDocDocumento; //Filtro por etiqueta
  documentosUsuario:DocumentoAutorUsuario[] = []; //Documentos con su usuario asociado.

  constructor(private usuario:UsuarioService, private documento:DocumentoService, private materia:MateriaService) { }

  ngOnInit(): void {
  }

  ngRecibirFiltro(filtro:string){
    this.filtro = filtro;
  }

  ngRecibirTexto(texto:string){
    this.texto = texto;
    //Aqui se realiza la consulta
    if(this.filtro == null){
      alert("ERROR: Debe elegir un filtro");
    }
    else if(texto == null || texto == ""){
      alert("ERROR: No se ingreso ninguna palabra para filtrar");
    }
    else{
      if(this.filtro == "Documentos"){
        this.documentosUsuario = [];
        //aqui documentos se iguala a la consulta de los documentos.
       this.documento.filterDocByNombre(texto).subscribe((data)=>{
          this.documentos = <Documento[]>data;
          this.documentos.forEach(doc => {
            this.documento.getUsuariosIdDoc(doc.id).subscribe((datos)=>{
              this.documentosUsuario.push(datos);
            });
          });
          if(this.documentos.length == 0 || this.documentos == null)
            alert("No se encontraron coincidencias");
        });
      }
      else if(this.filtro == "Autores"){
        //la consulta se asigna a documentosAutor, hacer el método que consulte Documentos de un usuario que reciba el nombre del usuario.
        //aqui documentos se iguala a documentos_usuario de documentosAutor
      }
      else if(this.filtro == "Materias"){
        //la consulta se asigna a documentosMateria, hacer el método que consulte Documentos de una materia que reciba el nombre de la materia.
        //aqui documentos se iguala a documentos_materia de documentosMateria
        this.documentosUsuario = [];
        this.materia.getDocsByMatNombre(texto).subscribe((data)=>{
          console.log(data);
          this.documentos = <Documento[]>data.documentos_materia;
           console.log(<Documento[]>data.documentos_materia);
           this.documentos.forEach(doc => {
            this.documento.getUsuariosIdDoc(doc.id).subscribe((datos)=>{
              this.documentosUsuario.push(datos);
            });
          });
          if(this.documentos.length == 0 || this.documentos == null)
            alert("No se encontraron coincidencias");
        });
      }
      else if(this.filtro == "Etiquetas"){
        //la consulta se asigna a documentosTag, hacer el método que consulte Documentos de un tag que reciba el nombre del tag.
        //aqui documentos se iguala a documentos_tag de documentosTag
      }
    }
  }
}
