import { Component, Input, OnInit } from '@angular/core';
import { Rol } from 'src/app/interfaces/rol';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { UsuarioRol } from 'src/app/interfaces/usuarioRol';

@Component({
  selector: 'perfilUsr',
  templateUrl: './perfilUsr.component.html',
  styleUrls: ['./perfilUsr.component.css']
})
export class PerfilUsrComponent implements OnInit {
  rol:Rol = {id:1,nombre:"Administrador"}; //Temporal en lo que se recibe un UsuarioRol
  @Input() usuario:UsuarioRol = {id:"0",nombre:"Alfonso Rochín Gómez",contrasena:"12345",correo:"alfonsorochin05@gmail.com",imagen:1,fk_rol:1,fk_carrera:"C01",usuario_rol:this.rol};
  comentarios:number;
  apariciones:number;
  documentos:UsuarioAutorDocumento;

  constructor() { }

  ngOnInit(): void {
  }

  ngConsultarUsuarioRol(id:string){
    //Aqui se mandaría a llamar el método que consulte un usuarioRol por ID, se debe crear
    //asignar los datos a usuario.
  }

  ngConsultarUsuarioComentario(id:string){
    //Aqui se mandaría a llamar el método que consulte un usuariocomentario por ID, se debe crear.
    //hacerle count.
  }

  ngConsultarUsuarioAutor(id:string){
    //Aqui se mandaría a llamar el método que consulta usuarioAutor por ID, se debe crear.
    //hacerle count.
  }

  ngConsultarUsuarioDocumento(id:string){
    //Aqui se mandaría a llamar el método que consulta usuarioDocumento por ID, se debe crear.
    //se asigna el resultado a documentos y se mandan al gridCards.
  }
}
