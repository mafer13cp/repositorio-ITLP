import { viewClassName } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  ops:string[]=["Opcion 1", "Opcion 2", "Opcion 3"]; //opciones obtenidas de la BD.
  opsFilter:string[]=["Opcion 4","Opcion 5","Opcion 6"];
  @ViewChild('autocomplete') autocomp:ElementRef;
  @ViewChild('opciones') opciones:ElementRef;
  
  constructor(private render:Renderer2) { }

  ngOnInit(): void {
  }


  ngGenerateOptions(){
    if(this.autocomp.nativeElement.innerText == "")
    while(this.opciones.nativeElement.childNodes.length > 0){
      let child = this.opciones.nativeElement.lastElementChild;
      this.opciones.nativeElement.removeChild(child);
    }
    let i = 0;
    while(i < this.ops.length){
      let opcion = document.createElement('p');
      //Style
      opcion.innerHTML=this.ops[i];
      opcion.style.display="block";
      opcion.addEventListener("mouseenter",function(){
        opcion.style.backgroundColor = "#E8E8E8";
      });
      opcion.addEventListener("mouseleave",function(){
        opcion.style.backgroundColor = "white";
      });
      opcion.addEventListener("click",function(){
        opcion.style.display = "none";
      });
      //End Style
      this.opciones.nativeElement.appendChild(opcion);
      i++;
    }
    console.log(this.opciones);
  }

  ngAssignStyle(opcion:any){
    opcion.style.backgroundColor = "purple";
  }

  ngLookFor(){
    let textoActual = this.autocomp.nativeElement.innerText;
    //Eliminar todas las opciones.
    while(this.opciones.nativeElement.childNodes.length > 0){
      let child = this.opciones.nativeElement.lastElementChild;
      this.opciones.nativeElement.removeChild(child);
    }
    //Buscar coincidencias en el arreglo usando textoActual con el filter del LIKE en MySQL y guardarlos en un arreglo temporal.
    
    let i = 0;
    while(i < this.opsFilter.length){
      let opcion = document.createElement('p');
      //Style
      opcion.innerHTML=this.opsFilter[i];
      opcion.style.display="block";
      opcion.addEventListener("mouseenter",function(){
        opcion.style.backgroundColor = "#E8E8E8";
      });
      opcion.addEventListener("mouseleave",function(){
        opcion.style.backgroundColor = "white";
      });
      opcion.addEventListener("click",function(){
        opcion.style.display = "none";
      });
      //End Style
      this.opciones.nativeElement.appendChild(opcion);
      i++;
    }
    console.log(this.opciones);
  }

}
