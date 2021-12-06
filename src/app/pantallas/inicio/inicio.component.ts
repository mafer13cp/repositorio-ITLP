import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocImgService } from 'src/app/services/docImg.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { LoggeadoService } from 'src/app/services/loggeado.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','../../app.component.css']
})
export class InicioComponent implements OnInit{
  user:UsuarioAutorDocumento[];
  idLog:string;

  constructor(private documento:DocumentoService,private comunicacion:ComunicacionService,readonly snackBar: MatSnackBar,
    private router:Router, private route:ActivatedRoute,private loggeado:LoggeadoService) { 
      if(!loggeado.getUsrId())
        router.navigate(['/login']);
    }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.comunicacion.setDocsEmpty();
        this.documento.getUsuariosNomDoc("").subscribe((data)=>{
          if(data.length == 0)
            this.openSnackBar("ERROR: No hay ningún documento en el sistema","OK");
          else{
            let cont = 0;
            for(let i = data.length-1; i >= 0; i--){
              this.comunicacion.addDocumentoUsr(data[i]);
              cont++;
              if(cont>20)
                break;
            }
          }
        });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngClickSF(text:string){
    //redireccionar a resBusqueda y mandar parámetro ingresado
    if(text != null && text != "")
      this.router.navigate([`/resBusqueda/${this.idLog}/${"SFText"}/${text}`]);
    else
      this.router.navigate([`/resBusqueda/${this.idLog}/${"SFText"}/${"_"}`]);
  }

  ngClickAcc(text: any)
  {
    if(text[1]=="Tag"){
      
      this.router.navigate([`/resBusqueda/${this.idLog}/${"Tag"}/${text[0]}`]);
    }
    else if(text[1]=="Materia"){
      this.router.navigate([`/resBusqueda/${this.idLog}/${"Materia"}/${text[0]}`]);
    }
  }

  ngSubir(){
    //Redireccionar a página para subir documento
    this.router.navigate([`/subirDoc/${this.idLog}`]);
  }
}
