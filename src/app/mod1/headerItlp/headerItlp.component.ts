import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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
  imgIcon: string = "../../../assets/img/userIcons/0.png"; //Debe tomar la foto del usuario loggeado

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngOnClick(ruta: string){
    //aquí se hace in switch de ruta para saber a donde se envía
    switch (ruta) {
      case 'materias':
        //Redireccionar a materias
        this.headerEvent.emit(ruta);
        console.log("Te manda a ver las materias ehe");
        this.router.navigate([`/matGen`]);
        break;
      case 'tags':
        //Redireccionar a tags
        this.headerEvent.emit(ruta);
        console.log("Te manda a ver las tags ehe");
        this.router.navigate([`/tagGen`]);
        break;
      case 'docs':
        //Redireccionar a documentos
        this.headerEvent.emit(ruta);
        console.log("Te manda a ver los documentos ehe");
        this.router.navigate([`/docGen`]);
          break;
      case 'usuario':
        //Redireccionar a perfil de usuario
        this.headerEvent.emit(ruta);
        console.log("Te manda a tu perfil de usuario ehe");
        this.router.navigate([`/perfilUsr/${"17310710"}`]); //obtener el id del loggeado.
          break;
      default:
        break;
    }
  }

  ngEdit() {
    console.log("Te manda a la pantalla de editar usuario");
    this.router.navigate([`/editarUsuario/${"17310710"}`]);
  }

  ngLogOut() {
    console.log("Cierra sesión, te regresa a la pantalla de login");
    this.router.navigate([`/login`]);
  }

  ngHelp() {
    console.log("Te manda a la pantalla de ayuda");
    this.router.navigate([`/inicio`]); //Debe llevarnos a help
  }

  ngRedirectInicio(){
    this.router.navigate([`/inicio`]);
  }

}
