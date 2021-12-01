import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Carrera } from 'src/app/interfaces/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'signUpCont',
  templateUrl: './signUpCont.component.html',
  styleUrls: ['./signUpCont.component.css']
})
export class SignUpContComponent implements OnInit {

  constructor(private carrera:CarreraService) { }
  @Output() public SUPEvent = new EventEmitter
  @ViewChild('carreras') divCarrera:ElementRef;
  carreras:Carrera[];
  roles:string[] = ["Empleado","Alumno","Maestro"];
  carrerasNombre:string[] = [];
  rol:string;
  carr:string;
  id:string;
  nombre:string;
  correo:string;
  contrasena:string;
  datos:Object;

  ngOnInit(): void {
    this.ngConsultarCarreras();
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

  ngRecibirRol(rol:string){
      this.rol = rol;
      if(rol != "Empleado"){
        this.divCarrera.nativeElement.style.visibility = "visible";
      }
      else{
        this.divCarrera.nativeElement.style.visibility = "hidden";
      }
      
  }

  ngRecibirCarrera(carrera:string){
    this.carr = carrera;
  }

  ngRecibirNombre(nombre:string){
    this.nombre = nombre;
  }

  ngRecibirCorreo(correo:string){
    this.correo = correo;
  }

  ngRecibirContrasena(contrasena:string){
    this.contrasena = contrasena;
  }

  ngRecibirId(id:string){
    this.id = id;
  }

  ngEnviarDatos(){
    if(this.rol != "Empleado"){
      this.datos = {id:this.id, nombre:this.nombre,correo:this.correo, contrasena:this.contrasena, rol:this.rol, carrera:this.carr};
      this.SUPEvent.emit(this.datos);
    }
    else{
      this.datos = {id:this.id, nombre:this.nombre,correo:this.correo, contrasena:this.contrasena, rol:this.rol, carrera:"Administrativo"};
      this.SUPEvent.emit(this.datos);
    }
  }
}
