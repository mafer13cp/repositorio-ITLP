import { isNgTemplate } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';

@Component({
  selector: 'myAutocomp',
  templateUrl: './myAutocomp.component.html',
  styleUrls: ['./myAutocomp.component.css','../../app.component.css']
})
export class MyAutocompComponent implements OnInit {
  materias:string[] = []; //suscrbirse.
  @ViewChild('autoc') autoC:ElementRef;
  filtro: string[] = [];
  @Output() public MAEvent = new EventEmitter();

  constructor(private comunicacion:ComunicacionService) { }

  ngOnInit(): void {
    this.comunicacion.getMaterias().subscribe((data)=>{
      this.materias = data;
    });
  }

  filtrarTexto(){
    let cadena = this.autoC.nativeElement.value;
    this.filtro = this.materias.filter(materia =>{
      return materia.toLowerCase().indexOf(cadena.toLowerCase()) > -1
    });
    this.MAEvent.emit(cadena);
  }

  /*
  focusText(){
    this.autoC.nativeElement.style.borderRadius = "50px 50px 0 0";
  }

  blurText(){
    console.log("FOCUS");
    this.autoC.nativeElement.style.borderRadius = "50px";
  }
  */
}
