import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'viewDocUsr',
  templateUrl: './viewDocUsr.component.html',
  styleUrls: ['./viewDocUsr.component.css','../../app.component.css']
})
export class ViewDocUsrComponent implements OnInit {
  autores:string[] = [];
  tags:string[] = [];
  materias:string[] = [];
  titulo:string;
  descripcion:string;

  constructor(private router:Router, private route:ActivatedRoute,private documento:DocumentoService,
    private comunicacion:ComunicacionService, private usuario:UsuarioService) { }

  ngOnInit(): void {
    let idDoc:number = parseInt(this.route.snapshot.paramMap.get('idDoc'));
    console.log(idDoc);
    this.documento.getComentariosUsuarioByDocId(idDoc).subscribe(doc=>{
      console.log(doc);
      this.comunicacion.setDocComentarios(doc[0]);
    });
    this.documento.getAuts_Tags_Mat_ByDocId(idDoc).subscribe(doc=>{
      console.log(doc);
      this.titulo = doc[0].nombre;
      this.descripcion = doc[0].descripcion;
      //obtenerAutores
      if(doc[0].usuarios_documento != null){
        for(let i = 0; i < doc[0].usuarios_documento.length; i++){
          this.comunicacion.setAutoresView(doc[0].usuarios_documento[i].nombre);
        }
      }
      //obtenerTags
      if(doc[0].tags_documento != null){
        for(let i = 0; i < doc[0].tags_documento.length; i++){
          this.comunicacion.setTagsView(doc[0].tags_documento[i].nombre);
        }
      }
      //obtenerMateria
      if(doc[0].documento_materia != null){
        this.comunicacion.setMateriaView(doc[0].documento_materia.nombre);
      }
    });
  }

  ngClickAcc(text: any)
  {
    if(text[1]=="Tag"){
      
      this.router.navigate([`/resBusqueda/${"Tag"}/${text[0]}`]);
    }
    else if(text[1]=="Materia"){
      this.router.navigate([`/resBusqueda/${"Materia"}/${text[0]}`]);
    }
    else if(text[1]=="Autor"){
      this.usuario.filterUsuarioByNombre(text[0]).subscribe(usr=>{
        this.router.navigate([`/perfilUsr/${usr[0].id}`]);
      });
    }
  }
}
