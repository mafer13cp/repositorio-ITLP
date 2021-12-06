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
  img: string = "../../../assets/img/userIcons/0.png";
  iconRol: string = "school";
  ttt: string =""; // ToolTip Text

  constructor(private comunicacion:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacion.getUsuarioPerfil$().subscribe((data)=>{
      this.usuario = data[0];
      this.rol = this.usuario.usuario_rol.nombre;
      this.nombre = this.usuario.nombre;
      this.id = this.usuario.id;
      this.correo = this.usuario.correo;
      this.img = `../../../assets/img/userIcons/${this.usuario.imagen}.png`;
      this.setIconRol(this.usuario.fk_rol);
    });
  }

  setIconRol(rol: number) {
    switch (rol) {
      case 1: //alumno
        this.iconRol = "school"
        this.ttt = "Este usuario es un alumno de la institutción";
        break;
      case 2: //maestro
        this.iconRol = "history_edu"
        this.ttt = "Este usuario es un maestro de la institutción";
        break;
      case 3: // empleado
        this.iconRol = "work"
        this.ttt = "Este usuario es un empleado de la institutción";
        break;
      case 4: //admin
        this.iconRol = "local_police"
        this.ttt = "Este usuario es un administrador del sitio";
        break;
      default:
        break;
    }
  }

}
