import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'editarUsuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  //el input es el usuario original, o sea el uruaio loggeado
  @Input() originalUsuario: Usuario = {
    id:"", 
    nombre: "",
    correo: "", 
    contrasena: "", 
    descripcion: "",
    imagen: 0,
    fk_rol: 0,
    fk_carrera: null
  }
  usuario: Usuario = this.originalUsuario;

  constructor(readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  ngRecibirDescripcion(descripcion:string){
    this.usuario.descripcion = descripcion;
  }
  ngRecibirImg(imgNum: number) {
    this.usuario.imagen = imgNum;
  }
  ngGuardarCambios(){
    console.log(this.usuario);
    //Aquí se manda a llamar el servicio para modificar el usuario
    this.openSnackBar("LISTO: Cambios guardados","OK");
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
