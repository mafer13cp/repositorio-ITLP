import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(readonly snackBar: MatSnackBar,private route:ActivatedRoute,private router:Router,private usr:UsuarioService) { }

  ngOnInit(): void {
    let idUsr = this.route.snapshot.paramMap.get('idLog');
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
    this.usr.putUsuario(this.usuario).subscribe(data=>{
      setTimeout(() => {
        this.router.navigate([`/perfilUsr/${this.usuario.id}`]);
        this.openSnackBar("LISTO: Cambios guardados","OK");
      }, 1000);
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

}
