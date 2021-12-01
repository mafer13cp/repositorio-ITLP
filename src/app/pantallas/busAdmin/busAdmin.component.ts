import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'busAdmin',
  templateUrl: './busAdmin.component.html',
  styleUrls: ['./busAdmin.component.css']
})
export class BusAdminComponent implements OnInit {
  filtro:string;
  texto:string;
  resultados:any[]; //resultado de la consulta segun el filtro y el texto.

  constructor() { }

  ngOnInit(): void {
  }

  ngRecibirFiltro(filtro:string){
    this.filtro = filtro;
  }

  ngRecibirTexto(texto:string){
    this.texto = texto;
    //Realizar la consulta;
    if(this.filtro == null){
      alert("ERROR: Debe elegir un filtro");
    }
    else if(texto == null || texto == ""){
      alert("ERROR: No se ingreso ninguna palabra para filtrar");
    }
    else{
      if(this.filtro == "Documentos"){
        this.resultados = [{id:"10",nombre:"Algoritmos"},{id:"20",nombre:"probabilidad"}];
        //Consultar los documentos según su nombre, no es necesario crear.
        console.log(this.resultados.length);
        if(this.resultados.length == 0)
        alert("No se encontraron coincidencias");
      }
      else if(this.filtro == "Materias"){
        //Consultar las materias por el nombre, no es necesario crear.
        if(this.resultados.length == 0)
          alert("No se encontraron coincidencias");
      }
      else if(this.filtro == "Etiquetas"){
        //Consultar las etiquetas por el nombre, no es necesario crear.
        if(this.resultados.length == 0)
          alert("No se encontraron coincidencias");
      }
      else if(this.filtro == "Autores"){
        //Consultar usuarios por el nombre, no es necesario crear.
        if(this.resultados.length == 0)
          alert("No se encontraron coincidencias");
      }
    }
  }

}
