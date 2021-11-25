import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'userInfo',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css','../../app.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() usuario: Usuario = {id: '17310000', rol: 'rol', nombre: 'Nombre usuario', correo: 'correo@gmail.com', contrasena: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
