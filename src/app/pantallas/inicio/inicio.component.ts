import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';
import { AutorService } from 'src/app/services/autor.service';
import { CarreraService } from 'src/app/services/carrera.service';
import { ComentarioDocumento } from 'src/app/interfaces/comentarioDocumento';
import { ComentarioService } from 'src/app/services/comentario.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { MateriaService } from 'src/app/services/materia.service';
import { OtrosService } from 'src/app/services/otro.service';
import { RatingService } from 'src/app/services/rating.service';
import { RolService } from 'src/app/services/rol.service';
import { TagService } from 'src/app/services/tag.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','../../app.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private bus:BusquedaService, private carrera:CarreraService,
    private comentario:ComentarioService, private documento:DocumentoService,
    private materia:MateriaService, private otros:OtrosService, private rating:RatingService,
    private rol:RolService, private tag:TagService, private usuario:UsuarioService) { }

  ngOnInit(): void {
    this.prueba().then((data)=>{
      console.log(data);      
      console.log("Proceso finalizado");
    });
    
  }

  prueba(){
    return new Promise((resolve,reject)=>{
      this.usuario.getRol().subscribe((data)=>{
        resolve(data);
      });
    });
  }
}
