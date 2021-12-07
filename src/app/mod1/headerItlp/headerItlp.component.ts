import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggeadoService } from 'src/app/services/loggeado.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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
  nombre:string;
  idLog:string;
  admin:boolean;

  constructor(private router:Router,private route:ActivatedRoute, private usuario:UsuarioService,private loggeado:LoggeadoService) {

   }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.usuario.getUsuarioById(this.idLog).subscribe(data=>{
      this.imgIcon = `../../../assets/img/userIcons/${data[0].imagen}.png`;
      this.nombre = data[0].nombre;
      if(data[0].fk_rol == 4){
        this.admin = true;
      }
    });
  }

  ngOnClick(ruta: string){
    //aquí se hace in switch de ruta para saber a donde se envía
    switch (ruta) {
      case 'materias':
        //Redireccionar a materias
        this.headerEvent.emit(ruta);
        this.router.navigate([`/matGen/${this.idLog}`]);
        break;
      case 'tags':
        //Redireccionar a tags
        this.headerEvent.emit(ruta);
        this.router.navigate([`/tagGen/${this.idLog}`]);
        break;
      case 'docs':
        //Redireccionar a documentos
        this.headerEvent.emit(ruta);
        this.router.navigate([`/docGen/${this.idLog}`]);
          break;
      case 'usuario':
        //Redireccionar a perfil de usuario
        this.headerEvent.emit(ruta);
        this.router.navigate([`/perfilUsr/${this.idLog}`]); //obtener el id del loggeado.
          break;
      default:
        break;
    }
  }

  ngEdit() {
    this.router.navigate([`/editarUsuario/${this.idLog}`]);
  }

  ngLogOut() {
    this.loggeado.setUsrId(false);
    this.router.navigate([`/login`]);
  }

  ngHelp() {
    this.router.navigate([`/ayuda/${this.idLog}`]); //Debe llevarnos a help
  }

  ngRedirectInicio(){
    this.router.navigate([`/inicio/${this.idLog}`]);
  }

  ngBusAdmin(){
    this.router.navigate([`/busAdmin/${this.idLog}`]);
  }

  ngAddAdmin(){
    this.router.navigate([`/addAdmins/${this.idLog}`]);
  }
}
