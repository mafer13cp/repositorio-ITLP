import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'headerItlp',
  templateUrl: './headerItlp.component.html',
  styleUrls: ['./headerItlp.component.css','../../app.component.css']
})
export class HeaderITLPComponent implements OnInit {
  @Output() public headerEvent= new EventEmitter();
  @ViewChild('materias') materiasLink:ElementRef;
  @ViewChild('tags') tagsLink:ElementRef;
  @ViewChild('docs') documentosLink:ElementRef;
  @ViewChild('usuario') usuarioLink:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnClick(ruta: string){
    //aquí se hace in switch de ruta para saber a donde se envía
    switch (ruta) {
      case 'materias':
        //Redireccionar a materias
        this.headerEvent.emit(ruta);
        console.log("Te manda a ver las materias ehe");
        break;
      case 'tags':
        //Redireccionar a tags
        this.headerEvent.emit(ruta);
        console.log("Te manda a ver las tags ehe");
        break;
      case 'docs':
        //Redireccionar a documentos
        this.headerEvent.emit(ruta);
        console.log("Te manda a ver los documentos ehe");
          break;
      case 'usuario':
        //Redireccionar a perfil de usuario
        this.headerEvent.emit(ruta);
        console.log("Te manda a tu perfil de usuario ehe");
          break;
      default:
        break;
    }
  }

}
