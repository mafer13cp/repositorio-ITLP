import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/interfaces/documento';
import { DocumentoAutorUsuario } from 'src/app/interfaces/documentoAutorUsuario';
import { MateriaDocumento } from 'src/app/interfaces/materiaDocumento';
import { TagTagDocDocumento } from 'src/app/interfaces/tagTagDocDocumento';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';
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

  constructor(private usuario:UsuarioService, private documento:DocumentoService, private materia:MateriaService,
    private comunicacion:ComunicacionService, private tag:TagService) { }

  ngOnInit(): void {
  }

  ngRecibirFiltro(filtro:string){
    this.filtro = filtro;
  }

  async ngRecibirTexto(texto:string){
    this.texto = texto;
    if(this.filtro == null){
      alert("ERROR: Debe elegir un filtro");
    }
    else if(texto == null || texto == ""){
      alert("ERROR: No se ingreso ninguna palabra para filtrar");
    }
    else{
      if(this.filtro == "Documentos"){
        this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc(texto).subscribe((data)=>{
          if(data.length == 0)
            alert("No se encontró ninguna coincidencia.");
          else{
            data.forEach(docUsr => {
              this.comunicacion.addDocumentoUsr(docUsr);
            });
          }
        });
      }
      else if(this.filtro == "Autores"){
        this.comunicacion.setDocsEmpty();
        this.usuario.getDocsUsrByUsrNombre(texto).subscribe((data)=>{
          if(data.length == 0)
            alert("No se encontró ninguna coincidencia.");
          else{
            data.forEach(usr => {
              usr.documentos_usuario.forEach(doc => {
                this.comunicacion.addDocumentoUsr2(doc,data);
              });
            });
          }
        });
      }
      else if(this.filtro == "Materias"){
        this.comunicacion.setDocsEmpty();
        this.materia.getDocsUsrByMatNombre(texto).subscribe((data)=>{
          if(data.length == 0)
            alert("No se encontró ninguna coincidencia.");
          else{
            data.forEach(materia => {
              materia.documentos_materia.forEach(docUsr => {
                this.comunicacion.addDocumentoUsr(docUsr);
              });
            });
          }
        });
      }
      else if(this.filtro == "Etiquetas"){
        this.comunicacion.setDocsEmpty();
        this.tag.getDocsUsrByTagNombre(texto).subscribe((data)=>{
          if(data.length == 0)
            alert("No se encontró ninguna coincidencia.");
          else{
            data.forEach(tag => {
              tag.documentos_tag.forEach(docUsr => {
                this.comunicacion.addDocumentoUsr(docUsr);
              });
            });
          }
        });
      }
    }
  }
}
