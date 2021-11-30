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
      console.log("DEBE SELECCIONAR UN FILTRO ERROR");
    }
    else if(this.filtro == "Documentos"){
      console.log(this.filtro);
      console.log(texto);
      this.resultados = [{id:"10",nombre:"Algoritmos"},{id:"20",nombre:"probabilidad"}];
      //Consultar los documentos según su nombre, no es necesario crear.
    }
    else if(this.filtro == "Materias"){
      console.log(this.filtro);
      console.log(texto);
      //Consultar las materias por el nombre, no es necesario crear.
    }
    else if(this.filtro == "Etiquetas"){
      console.log(this.filtro);
      console.log(texto);
      //Consultar las etiquetas por el nombre, no es necesario crear.
    }
    else if(this.filtro == "Autores"){
      console.log(this.filtro);
      console.log(texto);
      //Consultar usuarios por el nombre, no es necesario crear.
    }
  }

}
