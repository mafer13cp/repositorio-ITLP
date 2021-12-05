import { Component, OnInit } from '@angular/core';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { DocumentoService } from 'src/app/services/documento.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'busAdmin',
  templateUrl: './busAdmin.component.html',
  styleUrls: ['./busAdmin.component.css']
})
export class BusAdminComponent implements OnInit {
  filtro:string;
  texto:string;
  resultados:any[] = []; //resultado de la consulta segun el filtro y el texto.
  usuarios:UsuarioAutorDocumento[];
  tipo:string;

  constructor(private documento:DocumentoService, private materia:MateriaService, 
    private tag:TagService, private usuario:UsuarioService,readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngRecibirFiltro(filtro:string){
    this.filtro = filtro;
    if(this.filtro == "Documentos"){
      this.tipo = "Documento";
      //this.resultados = [{id:"10",nombre:"Algoritmos"},{id:"20",nombre:"probabilidad"}];
      //Consultar los documentos según su nombre, no es necesario crear.
      this.documento.filterDocByNombre("").subscribe((data)=>{
        this.resultados = data;
        if(this.resultados.length == 0)
        this.openSnackBar("No se encontraron coincidencias","OK");
      });
    }
    else if(this.filtro == "Materias"){
      this.tipo = "Materia";
      //Consultar las materias por el nombre, no es necesario crear.
      this.materia.filterMatByNombre("").subscribe((data)=>{
        this.resultados = data;
        if(this.resultados.length == 0)
        this.openSnackBar("ERROR: No se encontraron coincidencias","OK");
      });
    }
    else if(this.filtro == "Etiquetas"){
      this.tipo = "Tag";
      //Consultar las etiquetas por el nombre, no es necesario crear.
      this.tag.filterTagByNombre("").subscribe((data)=>{
        this.resultados = data;
        if(this.resultados.length == 0)
        this.openSnackBar("ERROR: No se encontraron coincidencias","OK");
      });
    }
  }

  ngRecibirTexto(texto:string){
    this.texto = texto;
    //Realizar la consulta;
    if(this.filtro == null){
      this.openSnackBar("ERROR: Debe elegir un filtro","OK");
    }
    else if(texto == null || texto == ""){
      this.openSnackBar("ERROR: No se ingresó ninguna palabra para filtrar","OK");
    }
    else{
      if(this.filtro == "Documentos"){
        this.tipo = "Documento";
        //this.resultados = [{id:"10",nombre:"Algoritmos"},{id:"20",nombre:"probabilidad"}];
        //Consultar los documentos según su nombre, no es necesario crear.
        this.documento.filterDocByNombre(texto).subscribe((data)=>{
          this.resultados = data;
          if(this.resultados.length == 0)
          this.openSnackBar("No se encontraron coincidencias","OK");
        });
      }
      else if(this.filtro == "Materias"){
        this.tipo = "Materia";
        //Consultar las materias por el nombre, no es necesario crear.
        this.materia.filterMatByNombre(texto).subscribe((data)=>{
          this.resultados = data;
          if(this.resultados.length == 0)
          this.openSnackBar("ERROR: No se encontraron coincidencias","OK");
        });
      }
      else if(this.filtro == "Etiquetas"){
        this.tipo = "Tag";
        //Consultar las etiquetas por el nombre, no es necesario crear.
        this.tag.filterTagByNombre(texto).subscribe((data)=>{
          this.resultados = data;
          if(this.resultados.length == 0)
          this.openSnackBar("ERROR: No se encontraron coincidencias","OK");
        });
      }
    }
  }

}
