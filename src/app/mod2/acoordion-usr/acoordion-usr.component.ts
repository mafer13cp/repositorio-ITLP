import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Otro } from 'src/app/interfaces/otros';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'acoordionUsr',
  templateUrl: './acoordion-usr.component.html',
  styleUrls: ['./acoordion-usr.component.css']
})
export class AcoordionUsrComponent implements OnInit {

  @Output() public AccEvent= new EventEmitter();
   //para pruebas
  listUsuarios: {nombre: string, fk_rol: number}[] = [{nombre: "nombre 1", fk_rol: 0},
  {nombre: "nombre 2", fk_rol: 1}, {nombre: "nombre 3", fk_rol: 2}, {nombre: "nombre 4", fk_rol: 3}];

  listOtros: {nombre: string}[] = [{nombre: "nombre 5"}, {nombre: "nombre 6"}];

  //fin de pruebas

  /* listUsuarios: Usuario[];
  listOtros: Otro[]; */

  rolIcon: string[] = ["school", "history_edu", "work", "local_police"];
  ttt: string[] = ["Este usuario es un alumno de la institutción", 
                    "Este usuario es un maestro de la institutción",
                    "Este usuario es un empleado de la institutción",
                    "Este usuario es un administrador del sitio"];

  constructor() { 
  }

  ngOnInit(): void {
  }
  
  ngOnClickUsr(control: any){
    //Mandar el valor del tittle (tags, materia o docs) y el id de la selección
    const texto = control.srcElement.innerHTML;
    this.AccEvent.emit(texto);
  }

}
