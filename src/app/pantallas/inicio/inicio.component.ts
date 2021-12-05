import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','../../app.component.css']
})
export class InicioComponent implements OnInit{
  user:UsuarioAutorDocumento[];

  constructor(private documento:DocumentoService,private comunicacion:ComunicacionService,readonly snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc("").subscribe((data)=>{
          if(data.length == 0)
            this.openSnackBar("ERROR: No hay ningún documento en el sistema","OK");
          else{
            for(let i = 0; i < data.length; i++){
              this.comunicacion.addDocumentoUsr(data[i]);
              if(i>20)
                break;
            }
          }
        });
    /*
    // PARA EJECUTAR UNA CONSULTA.
    this.prueba1().then((data)=>{
      console.log(data);
      console.log("Sigue el arreglo");
      this.user = <UsuarioAutorDocumento[]>data;      
      console.log(this.user);
      console.log("Proceso finalizado");
      this.user.forEach(usuario => {
        if(usuario.nombre == "Alfonso Rochín Gómez"){
          console.log(usuario);
        }
      });
    });
    */

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngClickSF(text:string){
    //redireccionar a resBusqueda y mandar parámetro ingresado
    if(text != null && text != "")
      this.router.navigate([`/resBusqueda/${"SFText"}/${text}`]);
    else
      this.router.navigate([`/resBusqueda/${"SFText"}/${"_"}`]);
  }
  ngClickAcc(text: any)
  {
    if(text[1]=="Tag"){
      
      this.router.navigate([`/resBusqueda/${"Tag"}/${text[0]}`]);
    }
    else if(text[1]=="Materia"){
      this.router.navigate([`/resBusqueda/${"Materia"}/${text[0]}`]);
    }
  }

  ngSubir(){
    //Redireccionar a página para subir documento
    this.router.navigate(['/subirDoc']);
  }
/*
  prueba1(){
    return new Promise((resolve,reject)=>{
      this.usuario.getDocumentos().subscribe((data)=>{
        resolve(data);
      });
    });
  }
  */
 
}
