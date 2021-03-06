import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { AutorService } from 'src/app/services/autor.service';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { LoggeadoService } from 'src/app/services/loggeado.service';
import { MateriaService } from 'src/app/services/materia.service';
import { OtrosService } from 'src/app/services/otro.service';
import { TagService } from 'src/app/services/tag.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'editarDoc',
  templateUrl: './editar-doc.component.html',
  styleUrls: ['./editar-doc.component.css']
})
export class EditarDocComponent implements OnInit {
  coleccion = {autores: null,tags:null,titulo:null,materia:null,archivo:null,descripcion:null};
  autores:string[] = [];
  autoresO:Usuario[] = [];
  otrosN:string[]=[];
  usrsID:string[]=[];
  boolAutor: boolean = false;
  idLog:string;
  idDoc:number;
  date:string;

  constructor(readonly snackBar: MatSnackBar, private otrosServ:OtrosService, private autorServ:AutorService,
    private route:ActivatedRoute, private usuario:UsuarioService,private documento:DocumentoService,private router:Router,
    private loggeado:LoggeadoService) { 
      if(!loggeado.getUsrId())
        router.navigate(['/login']);
    }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.idDoc = parseInt(this.route.snapshot.paramMap.get('idDoc'));
    this.date = new Date(Date.now()).toLocaleDateString().toString();
    this.usuario.getUsuarios().subscribe((data)=>{
      this.autoresO = data;
      //this.usuarioL = this.usuarioLog.getUsuarioLoggeado();
      data.forEach(a => {
        if(a.id != this.idLog)
          this.autores.push(a.nombre);
      });
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngRecibirAutores(autores:string[]){
    this.coleccion.autores = autores;
  }

  ngRecibirTitulo(titulo:string){
    this.coleccion.titulo = titulo;
  }


  ngRecibirDescripcion(descripcion:string){
    this.coleccion.descripcion = descripcion;
  }


  ngSubirDocumento(){
    this.boolAutor = false;
    if(this.coleccion.titulo == null || this.coleccion.titulo == "") //Validaci??n de vacio o nulo
      this.openSnackBar("ERROR: Debe ingresar un t??tulo","OK");
    else if(this.coleccion.descripcion == null || this.coleccion.descripcion == "")
      this.openSnackBar("ERROR: Debe ingresar una descripci??n","OK");
    else  if(this.coleccion.titulo.length > 80) //Validaci??n longitud de datos
      this.openSnackBar("ERROR: El t??tulo excede la longitud m??xima","OK");
    else if(this.coleccion.descripcion.length > 200)
      this.openSnackBar("ERROR: La descripci??n excede la longitud m??xima","OK");
    else{
      if(this.coleccion.autores !=null && this.coleccion.autores != []){
        for(let i = 0; i < this.coleccion.autores.length; i++){
            if(this.coleccion.autores[i].length > 50){
              this.openSnackBar("ERROR: El nombre de un autor excede la longitud m??xima","OK");
              this.boolAutor = true;
              break;
            }
        }
      }
      this.usrsID = [];
      this.otrosN = [];

      //Obtenci??n de autores registrados en el sistema y de autores no registrados en el sistema.
      if(this.coleccion.autores != null){
        for(let i = 0; i < this.coleccion.autores.length; i++){
          let usrOrNot = false;
          for(let j = 0; j < this.autoresO.length; j++){
            if(this.coleccion.autores[i] == this.autoresO[j].nombre){
              this.usrsID.push(this.autoresO[j].id);
              usrOrNot = true;
            }
          }
          if(!usrOrNot)
            this.otrosN.push(this.coleccion.autores[i]);
        }
      }

      if(!this.boolAutor){
        this.documento.getDocById(this.idDoc).subscribe(data=>{
          this.documento.putDoc({id:this.idDoc,nombre:this.coleccion.titulo,descripcion:this.coleccion.descripcion,archivoUrl:data.archivoUrl,imgUrl:data.imgUrl,fk_materia:data.fk_materia,fecha:data.fecha}).subscribe(res=>{
            
          });

        });
        for(let i = 0; i < this.otrosN.length; i++){
          this.otrosServ.postOtro(this.otrosN[i],this.idDoc).subscribe((data)=>{
            
          });
        }

        for(let i = 0; i < this.usrsID.length; i++){
          this.autorServ.postAutor(this.usrsID[i],this.idDoc).subscribe((data)=>{
            
          });
        }
        setTimeout(() => {
          this.openSnackBar("El documento se ha actualizado exitosamente","OK");
          this.router.navigate([`/inicio/${this.idLog}`]);
        }, 1000);
      }
    }
  }
}
