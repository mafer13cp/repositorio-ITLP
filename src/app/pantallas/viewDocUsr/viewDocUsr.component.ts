import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { LoggeadoService } from 'src/app/services/loggeado.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'viewDocUsr',
  templateUrl: './viewDocUsr.component.html',
  styleUrls: ['./viewDocUsr.component.css','../../app.component.css']
})
export class ViewDocUsrComponent implements OnInit {
  titulo:string;
  descripcion:string;
  idDoc:number;
  imgDoc:string;
  idLog:string;

  constructor(private router:Router, private route:ActivatedRoute,private documento:DocumentoService,
    private comunicacion:ComunicacionService, private usuario:UsuarioService, private loggeado:LoggeadoService) { 
      if(!loggeado.getUsrId())
        router.navigate(['/login']);
    }

  ngOnInit(): void {
    this.comunicacion.setTagMatAutOtroViewEmpty();
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.idDoc = parseInt(this.route.snapshot.paramMap.get('idDoc'));
    this.documento.getComentariosUsuarioByDocId(this.idDoc).subscribe(doc=>{
      this.comunicacion.setDocComentarios(doc[0]);
    });
    this.documento.getAuts_Tags_Mat_ByDocId(this.idDoc).subscribe(doc=>{
      this.titulo = doc[0].nombre;
      this.descripcion = doc[0].descripcion;
      this.imgDoc = doc[0].imgUrl;
      //obtenerAutores
      if(doc[0].usuarios_documento != null){
        for(let i = 0; i < doc[0].usuarios_documento.length; i++){
          this.comunicacion.setAutoresView(doc[0].usuarios_documento[i]);
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
    this.documento.getOtrosByDocId(this.idDoc).subscribe(data=>{
      if(data[0].otros_documento != null){
        for(let i = 0; i < data[0].otros_documento.length; i++){
          this.comunicacion.setOtrosView(data[0].otros_documento[i]);
        }
      }
    });
  }

  ngClickAcc(text: any)
  {
    if(text[1]=="Tag"){
      
      this.router.navigate([`/resBusqueda/${this.idLog}/${"Tag"}/${text[0]}`]);
    }
    else if(text[1]=="Materia"){
      this.router.navigate([`/resBusqueda/${this.idLog}/${"Materia"}/${text[0]}`]);
    }
    else if(text[1]=="Autor"){
      this.usuario.filterUsuarioByNombre(text[0]).subscribe(usr=>{
        this.router.navigate([`/perfilUsr/${this.idLog}/${usr[0].id}`]);
      });
    }
  }

  ngClickCard(){
    this.router.navigate([`/viewDocPan/${this.idLog}/${this.idDoc}`]);
  }
}
