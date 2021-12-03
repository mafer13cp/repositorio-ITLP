import { Component, Input, OnInit } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { UsuarioRol } from 'src/app/interfaces/usuarioRol';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'perfilUsr',
  templateUrl: './perfilUsr.component.html',
  styleUrls: ['./perfilUsr.component.css']
})
export class PerfilUsrComponent implements OnInit {
  rol:Rol = {id:1,nombre:"Administrador"}; //Temporal en lo que se recibe un UsuarioRol
  @Input() usuario:UsuarioRol;
  comentarios:number;
  apariciones:number;
  documentos:UsuarioAutorDocumento;

  constructor(private usr:UsuarioService, private comunicacion:ComunicacionService) { }

  ngOnInit(): void {
    this.ngConsultarUsuarioRol("17310710");
    this.ngConsultarUsuarioComentario("17310710");
    this.ngConsultarUsuarioAutor("17310710");
    this.ngConsultarUsuarioDocumento("17310710");
  }

  ngConsultarUsuarioRol(id:string){
    //Aqui se mandaría a llamar el método que consulte un usuarioRol por ID, se debe crear
    //asignar los datos a usuario.
    this.usr.getRolById(id).subscribe((data)=>{
      this.usuario = data;
      this.comunicacion.setUsuarioPerfil(this.usuario);
    });
  }

  ngConsultarUsuarioComentario(id:string){
    //Aqui se mandaría a llamar el método que consulte un usuariocomentario por ID, se debe crear.
    //hacerle count.
    this.usr.getComentsById(id).subscribe((data)=>{
      this.comentarios = data[0].comentarios_usuario.length
    });
  }

  ngConsultarUsuarioAutor(id:string){
    //Aqui se mandaría a llamar el método que consulta usuarioAutor por ID, se debe crear.
    //hacerle count.
    this.usr.getDocsById(id).subscribe((data)=>{
      this.apariciones = data[0].documentos_usuario.length;
    });
  }

  ngConsultarUsuarioDocumento(id:string){
    //Aqui se mandaría a llamar el método que consulta usuarioDocumento por ID, se debe crear.
    //se asigna el resultado a documentos y se mandan al gridCards.
    this.usr.getDocsById(id).subscribe((data)=>{
      data[0].documentos_usuario.forEach(doc => {
        this.comunicacion.addDocumentoUsrPerfil(doc,data[0].nombre);
      });
    });
  }
}
