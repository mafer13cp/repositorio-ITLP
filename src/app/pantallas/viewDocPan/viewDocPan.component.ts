import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'viewDocPan',
  templateUrl: './viewDocPan.component.html',
  styleUrls: ['./viewDocPan.component.css','../../app.component.css']
})
export class ViewDocPanComponent implements OnInit {
  titulo:string;
  idDoc:number;
  url:string = "";

  constructor(private router:Router, private route:ActivatedRoute,private documento:DocumentoService,
    private comunicacion:ComunicacionService, private usuario:UsuarioService) { }

  ngOnInit(): void {
    this.comunicacion.setTagMatAutViewEmpty();
    this.idDoc = parseInt(this.route.snapshot.paramMap.get('idDoc'));
    console.log(this.idDoc);
    this.documento.getComentariosUsuarioByDocId(this.idDoc).subscribe(doc=>{
      console.log(doc);
      this.comunicacion.setDocComentarios(doc[0]);
      this.comunicacion.setUrlFull(doc[0].archivoUrl);
      console.log(doc[0].archivoUrl);
    });
    this.documento.getAuts_Tags_Mat_ByDocId(this.idDoc).subscribe(doc=>{
      console.log(doc);
      this.titulo = doc[0].nombre;
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

  ngClickAcc(text: string)
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
