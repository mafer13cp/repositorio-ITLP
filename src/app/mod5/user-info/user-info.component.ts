import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'userInfo',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css','../../app.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() usuario: Usuario = {id: '17310000', rol: 'rol', nombre: 'María Fernanda Cota Pérez', correo: 'rebecarochingomez1993@gmail.com', contrasena: '', img: 1};
  constructor() { }

  ngOnInit(): void {
  }

}
