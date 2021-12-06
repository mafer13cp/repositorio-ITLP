import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Carrera } from 'src/app/interfaces/carrera';
import { CarreraService } from 'src/app/services/carrera.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'adminAdd',
  templateUrl: './adminAdd.component.html',
  styleUrls: ['./adminAdd.component.css','../../app.component.css']
})
export class AdminAddComponent implements OnInit {
  @Input() ops:string[]=[];
  constructor(private carrera:CarreraService, private snackBar:MatSnackBar,private materia:MateriaService, private tag:TagService) { }
  @Output() public AAEvent = new EventEmitter
  @ViewChild('carreras') ddlCarrera:ElementRef;
  @ViewChild('materia') divMateria:ElementRef;
  carreras:Carrera[];
  carrerasNombre:string[] = [];
  selection: string;
  nombre: string;
  clave: string;
  carr:string;
  datos: Array<any>;

  ngOnInit(): void {
    this.ngConsultarCarreras();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngRecibirAdd(selection:string){
    this.selection = selection;
    if(selection == "Materia"){
      this.divMateria.nativeElement.style.visibility = "visible";
    }
    else{
      this.divMateria.nativeElement.style.visibility = "hidden";
    }
  }

  ngConsultarCarreras(){
    this.carrera.getCarreras().subscribe((data)=>{
      this.carreras = data;
      this.carreras.forEach(carr => {
        if(carr.nombre != "Administrativo")
          this.carrerasNombre.push(carr.nombre);
      });
    });
  }

  ngRecibirNombre(nombre:string){
    this.nombre = nombre;
  }

  ngRecibirClave(clave:string){
    this.clave = clave;
  }

  ngRecibirCarrera(carrera:string){
    this.carr = carrera;
  }

  ngAgregar(){;
    if (this.selection == "Materia") {
      this.datos = [this.clave, this.nombre, this.carr];
      
      if(this.datos[0] == "" || this.datos[0] == null)
        this.openSnackBar("ERROR: La clave de la materia no puede estar vacía","OK");
      else if(this.datos[1] == "" || this.datos[0] == null)
        this.openSnackBar("ERROR: El nombre de la materia no puede estar vacío","OK");
      else if(this.carr == null)
        this.openSnackBar("ERROR: Debe seleccionar una carrera","OK");
      else if(this.datos[0].length > 10)
        this.openSnackBar("ERROR: La clave excede la longitud máxima","OK");
      else if(this.datos[1].length > 50)
        this.openSnackBar("ERROR: El nombre excede la longitud máxima","OK");
      else{
        this.carrera.getCarreraByName(this.carr).subscribe(data=>{
          let idCarr = data[0].id;
          this.materia.getMats().subscribe(materias=>{
            let existe = 0;
            for(let i = 0; i < materias.length;i++){
              if(this.datos[0] == materias[i].id){
                existe=1;
                break;
              }
            }
            if(existe == 0){
              this.materia.postMat({id:this.datos[0],nombre:this.datos[1],fk_carrera:idCarr}).subscribe(data=>{
                this.openSnackBar("La materia se subio exitosamente","OK");
              });
            }
            else
              this.openSnackBar("ERROR: La clave de la materia ya existe","OK");
          });
        });
      }
    } 
    else if (this.selection == "Tag") {
      this.datos = [this.nombre];
      if(this.datos[0] == "" || this.datos[0] == null)
        this.openSnackBar("ERROR: El nombre del tag no puede estar vacío","OK");
      else if(this.datos[0].length > 20)
        this.openSnackBar("ERROR: El nombre del tag excede el tamaño máximo","OK");
      else{
        this.tag.postTag(this.datos[0]).subscribe(res=>{
          this.openSnackBar("El tag se subió exitosamente","OK");
        });
      }
    }   
    this.AAEvent.emit(this.datos);
  }

}
