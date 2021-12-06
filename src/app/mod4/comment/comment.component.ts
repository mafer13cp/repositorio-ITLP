import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Input, Output, ViewChild, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css','../../app.component.css']
})
export class CommentComponent implements OnInit {
  @Output() public UserEvent= new EventEmitter();
  @Input() userName: string = "Nombre usuario";
  @Input() date: string = "01/01/21";
  @Input() text: string = "Lorem";
  @Input() imagen:number = 0;
  @Input() rol:number = 0;
  @Input() idUsrCom:string;
  imgIcon: string = ""; //Debe tomarlo del usuario
  iconRol: string = "school";  //Debe tomarlo del usuario x2
  ttt: string =""; // ToolTip Text  //Debe tomarlo del usuario x3
  idLog:string;

  constructor(private usuario:UsuarioService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    //Aquí se debe de hacer la consulta del usuario y poner la info en las variables
    this.setIconRol(this.rol);
    this.imgIcon = `../../../assets/img/userIcons/${this.imagen}.png`; //Debe tomarlo del usuario
  }

  ngOnClick(control: any){
    //Mandar el nombre de usuario y el id para mostrar perfil
    const texto = control.srcElement.innerHTML;
    this.UserEvent.emit(texto);
    this.router.navigate([`/perfilUsr/${this.idLog}/${this.idUsrCom}`]);
  }

  setIconRol(rol: number) {
    switch (rol) {
      case 1: //alumno
        this.iconRol = "school"
        this.ttt = "Este usuario es un alumno de la institutción";
        break;
      case 2: //maestro
        this.iconRol = "history_edu"
        this.ttt = "Este usuario es un maestro de la institutción";
        break;
      case 3: // empleado
        this.iconRol = "work"
        this.ttt = "Este usuario es un empleado de la institutción";
        break;
      case 4: //admin
        this.iconRol = "local_police"
        this.ttt = "Este usuario es un administrador del sitio";
        break;
      default:
        break;
    }
  }
}
