import { Component, OnInit } from '@angular/core';
import { UsuarioAutorDocumento } from 'src/app/interfaces/usuarioAutorDocumento';
import { DocumentoService } from 'src/app/services/documento.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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

  constructor(private documento:DocumentoService, private materia:MateriaService, private tag:TagService, private usuario:UsuarioService) { }

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
        //this.resultados = [{id:"10",nombre:"Algoritmos"},{id:"20",nombre:"probabilidad"}];
        //Consultar los documentos según su nombre, no es necesario crear.
        this.documento.filterDocByNombre(texto).subscribe((data)=>{
          this.resultados = data;
          if(this.resultados.length == 0)
          alert("No se encontraron coincidencias");
        });
      }
      else if(this.filtro == "Materias"){
        //Consultar las materias por el nombre, no es necesario crear.
        this.materia.filterMatByNombre(texto).subscribe((data)=>{
          this.resultados = data;
          if(this.resultados.length == 0)
          alert("No se encontraron coincidencias");
        });
      }
      else if(this.filtro == "Etiquetas"){
        //Consultar las etiquetas por el nombre, no es necesario crear.
        this.tag.filterTagByNombre(texto).subscribe((data)=>{
          this.resultados = data;
          if(this.resultados.length == 0)
          alert("No se encontraron coincidencias");
        });
      }
      else if(this.filtro == "Autores"){
        //Consultar usuarios por el nombre, no es necesario crear.
        this.resultados = [];
        this.usuarios = [];
        this.usuario.getDocumentos().subscribe((data)=>{
          this.usuarios = <UsuarioAutorDocumento[]>data;
          let re = new RegExp(`${texto}.*`,'i');
          this.usuarios.forEach(user => {
            if(user.documentos_usuario != null && user.nombre.match(re))
              this.resultados.push(user);
          });
          if(this.resultados.length == 0)
          alert("No se encontraron coincidencias");
        });
      }
    }
  }

}
