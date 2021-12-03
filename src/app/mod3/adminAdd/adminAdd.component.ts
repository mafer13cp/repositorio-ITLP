import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Carrera } from 'src/app/interfaces/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'adminAdd',
  templateUrl: './adminAdd.component.html',
  styleUrls: ['./adminAdd.component.css','../../app.component.css']
})
export class AdminAddComponent implements OnInit {
  @Input() ops:string[]=[];
  constructor(private carrera:CarreraService) { }
  @Output() public AAEvent = new EventEmitter
  @ViewChild('carreras') ddlCarrera:ElementRef;
  @ViewChild('materia') divMateria:ElementRef;
  carreras:Carrera[];
  carrerasNombre:string[] = [];
  selection: string;
  nombre: string;
  clave: string;
  carr:string;
  datos: object;

  ngOnInit(): void {
    this.ngConsultarCarreras();
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

  ngAgregar(){
    if (this.selection == "Materia") {
      this.datos = {clave: this.clave, nombre: this.nombre, carrera: this.carr};
    } 
    else if (this.selection == "Tag") {
      this.datos = {nombre: this.nombre};
    }   
    this.AAEvent.emit(this.datos);
  }

}
