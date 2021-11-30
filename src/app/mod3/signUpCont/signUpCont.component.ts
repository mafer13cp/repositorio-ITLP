import { Component, OnInit } from '@angular/core';
import { Carrera } from 'src/app/interfaces/carrera';
import { CarreraService } from 'src/app/services/carrera.service';

@Component({
  selector: 'signUpCont',
  templateUrl: './signUpCont.component.html',
  styleUrls: ['./signUpCont.component.css']
})
export class SignUpContComponent implements OnInit {

  constructor(private carrera:CarreraService) { }
  carreras:Carrera[];
  roles:string[] = ["Empleado","Alumno","Maestro"];
  carrerasNombre:string[] = [];

  ngOnInit(): void {
    this.ngConsultarCarreras();
  }

  ngConsultarCarreras(){
    this.carrera.getCarreras().subscribe((data)=>{
      this.carreras = data;
      console.log(this.carreras);
      this.carreras.forEach(carr => {
        this.carrerasNombre.push(carr.nombre);
      });
      console.log(this.carrerasNombre);
    });
  }
}
