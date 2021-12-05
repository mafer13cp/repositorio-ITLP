import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'editarUsuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  //el input es el usuario original, o sea el uruaio loggeado
  usuario:Usuario;

  constructor(readonly snackBar: MatSnackBar,private route:ActivatedRoute,private usr:UsuarioService) { }

  ngOnInit(): void {
    let idUsr = this.route.snapshot.paramMap.get('idUsr');
    this.usr.getUsuarioById(idUsr).subscribe(data => {
      this.usuario = data[0];
    })
  }

  ngRecibirDescripcion(descripcion:string){
    this.usuario.descripcion = descripcion;
  }
  ngRecibirImg(imgNum: number) {
    this.usuario.imagen = imgNum;
  }
  ngGuardarCambios(){
    console.log(this.usuario);
    this.usr.putUsuario(this.usuario).subscribe(data=>{
      console.log(data);
    });
    this.openSnackBar("LISTO: Cambios guardados","OK");
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

}
