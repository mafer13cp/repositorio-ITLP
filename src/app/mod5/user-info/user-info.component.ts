import { Component, OnInit, Input } from '@angular/core';
import { UsuarioRol } from 'src/app/interfaces/usuarioRol';
import { Rol } from 'src/app/interfaces/rol';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'userInfo',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css','../../app.component.css']
})
export class UserInfoComponent implements OnInit {
  public usuario: UsuarioRol;
  rol:string = "";
  nombre:string ="";
  id:string = "";
  correo:string = "";

  constructor(private comunicacion:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacion.getUsuarioPerfil$().subscribe((data)=>{
      this.usuario = data[0];
      this.rol = this.usuario.usuario_rol.nombre;
      this.nombre = this.usuario.nombre;
      this.id = this.usuario.id;
      this.correo = this.usuario.correo;
    });
  }

}
