import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from 'src/app/interfaces/materia';
import { Tag } from 'src/app/interfaces/tag';
import { Usuario } from 'src/app/interfaces/usuario';
import { AutorService } from 'src/app/services/autor.service';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocImgService } from 'src/app/services/docImg.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoggeadoService } from 'src/app/services/loggeado.service';
import { MateriaService } from 'src/app/services/materia.service';
import { OtrosService } from 'src/app/services/otro.service';
import { TagDocService } from 'src/app/services/tag-doc.service';
import { TagService } from 'src/app/services/tag.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'subirDoc',
  templateUrl: './subirDoc.component.html',
  styleUrls: ['./subirDoc.component.css']
})
export class SubirDocComponent implements OnInit {
  coleccion = {autores: null,tags:null,titulo:null,materia:null,archivo:null,descripcion:null};
  boolAutor: boolean = false;
  boolTag: boolean = false;
  boolMat:boolean = true;
  tags:string[] = [];
  materias:string[] = [];
  autores:string[] = [];
  tagsO:Tag[] = [];
  materiasO:Materia[] = [];
  autoresO:Usuario[] = [];
  usuarioL:Usuario;

  otrosN:string[]=[];
  usrsID:string[]=[];
  tagsID:number[]=[];
  otherTagN:string[]=[];
  matID:string = null;
  date:string;
  idLog:string;

  constructor(readonly snackBar: MatSnackBar,private materia:MateriaService, private comunicacion:ComunicacionService,
    private tag:TagService, private usuario:UsuarioService,
    private docServ:DocumentoService,private tagDocServ:TagDocService,private tagServ:TagService,
    private autorServ:AutorService,private otrosServ:OtrosService, private fireServ:FirebaseService, private route:ActivatedRoute,
    private loggeado:LoggeadoService,private router:Router, private docImg: DocImgService) { 
      if(!loggeado.getUsrId())
        router.navigate(['/login']);
    }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.date = new Date(Date.now()).toLocaleDateString().toString();
    this.materia.getMats().subscribe((data)=>{
      this.materiasO = data;
      this.comunicacion.setMaterias(data);
      data.forEach(m => {
        this.materias.push(m.nombre);
      });
    });
    this.tag.getTags().subscribe((data)=>{
      this.tagsO = data;
      data.forEach(t => {
        this.tags.push(t.nombre);
      });
    });
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

  ngRecibirTags(tags:string[]){
    this.coleccion.tags = tags;
  }

  ngRecibirTitulo(titulo:string){
    this.coleccion.titulo = titulo;
  }

  ngRecibirMateria(materia:string){
    this.coleccion.materia = materia;
  }

  ngRecibirDescripcion(descripcion:string){
    this.coleccion.descripcion = descripcion;
  }

  ngRecibirArchivo(file:any){
    this.coleccion.archivo = file;
  }

  ngSubirDocumento(){
    this.boolAutor = false;
    this.boolTag = false;
    this.boolMat = true;
    if(this.coleccion.titulo == null || this.coleccion.titulo == "") //Validación de vacio o nulo
      this.openSnackBar("ERROR: Debe ingresar un título","OK");
    else if(this.coleccion.archivo == null || this.coleccion.archivo == "")
      this.openSnackBar("ERROR: Debe seleccionar un archivo","OK");
    else if(this.coleccion.descripcion == null || this.coleccion.descripcion == "")
      this.openSnackBar("ERROR: Debe ingresar una descripción","OK");
    else if(this.coleccion.tags == null || this.coleccion.tags == [])
      this.openSnackBar("ERROR: Debe ingresar al menos un tag","OK");
    else  if(this.coleccion.titulo.length > 80) //Validación longitud de datos
    this.openSnackBar("ERROR: El título excede la longitud máxima","OK");
    else if(this.coleccion.descripcion.length > 200)
      this.openSnackBar("ERROR: La descripción excede la longitud máxima","OK");
    else if(this.coleccion.archivo.type != "application/pdf")
    this.openSnackBar("ERROR: Solo se aceptan archivos PDF","OK");
    else{
      if(this.coleccion.autores !=null && this.coleccion.autores != []){
        for(let i = 0; i < this.coleccion.autores.length; i++){
            if(this.coleccion.autores[i].length > 50){
              this.openSnackBar("ERROR: El nombre de un autor excede la longitud máxima","OK");
              this.boolAutor = true;
              break;
            }
        }
      }
      if(this.coleccion.tags !=null && this.coleccion.tags != []){
        for(let i = 0; i < this.coleccion.tags.length; i++){
            if(this.coleccion.tags[i].length > 50){
              this.openSnackBar("ERROR: El nombre de un tag excede la longitud máxima","OK");
              this.boolTag = true;
              break;
            }
        }
      }
      this.materias.forEach(mat => {
        if(this.coleccion.materia == mat)
            this.boolMat = false;
      });
      
      if(this.boolMat)
        this.openSnackBar("ERROR: La materia ingresada no existe en el sistema","OK");

      this.usrsID = [];
      this.otrosN = [];
      this.otherTagN = [];
      this.tagsID = [];

      //this.usrsID.push(this.usuarioLog.getUsuarioLoggeado().id);
      this.usrsID.push(this.idLog);
      console.log(this.usrsID);
      console.log(this.coleccion);
      //Obtención de autores registrados en el sistema y de autores no registrados en el sistema.
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

      //Obtención de los tags registrados en el sistema y no registrados.
      if(this.coleccion.tags != null){
        for(let i = 0; i < this.coleccion.tags.length; i++){
          let tagOrNot = false;
          for(let j = 0; j < this.tagsO.length; j++){
            if(this.coleccion.tags[i] == this.tagsO[j].nombre){
              this.tagsID.push(this.tagsO[j].id);
              tagOrNot = true;
            }
          }
          if(!tagOrNot)
            this.otherTagN.push(this.coleccion.tags[i]);
        }
      }

      //Obtener el id de la materia
      for(let i = 0; i < this.materiasO.length; i++){
        if(this.materiasO[i].nombre == this.coleccion.materia){
          this.matID = this.materiasO[i].id;
          break;
        }
      }
      console.log("Usuarios en el sistema");
      console.log(this.usrsID);
      console.log("Otros Usuarios");
      console.log(this.otrosN);
      console.log("tags Nuevos");
      console.log(this.otherTagN);
      console.log("Tags Existentes");
      console.log(this.tagsID);
      console.log("SIGO BIEN");
      if(!this.boolTag && !this.boolAutor && !this.boolMat){
        this.fireServ.uploadDoc(this.coleccion.archivo).then(()=>{ //Subir doc a firebase
          this.fireServ.consultDoc(this.coleccion.archivo.name).then((url)=>{ //obtener link del doc

            //

            this.docImg.postDocImg(url, this.coleccion.archivo.name).subscribe((imgDocUrl) => { //Subir y obtener img de la portada del doc
              console.log(imgDocUrl.body.Files[0].Url);
              let imgDoc = imgDocUrl.body.Files[0].Url;
            //
            //Agregar doc a al BD
            this.docServ.postDoc({id:null,nombre:this.coleccion.titulo,descripcion:this.coleccion.descripcion,archivoUrl:url,imgUrl:imgDoc,fk_materia:this.matID,fecha:this.date}).subscribe((data)=>{

              for(let i = 0; i < this.otherTagN.length; i++){
                this.tagServ.postTag(this.otherTagN[i]).subscribe((data)=>{
                  this.tagsID.push(data.body.id);
                });
              }

              for(let i = 0; i < this.otrosN.length; i++){
                this.otrosServ.postOtro(this.otrosN[i],data.body.id).subscribe((data)=>{
                });
              }

              for(let i = 0; i < this.usrsID.length; i++){
                this.autorServ.postAutor(this.usrsID[i],data.body.id).subscribe((data)=>{
                });
              }

              setTimeout(() => {
                for(let i = 0; i < this.tagsID.length; i++){
                  this.tagDocServ.postTagDoc(this.tagsID[i],data.body.id).subscribe((data)=>{
                  });
                }
              }, 3000);

              this.openSnackBar("El documento se ha subido exitosamente","OK");
            });
            });
          });
        })
      }
    }
  }
}
