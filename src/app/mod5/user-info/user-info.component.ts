import { Component, OnInit, Input } from '@angular/core';
import { UsuarioRol } from 'src/app/interfaces/usuarioRol';
import { Rol } from 'src/app/interfaces/rol';

@Component({
  selector: 'userInfo',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css','../../app.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() usuario: UsuarioRol;

  constructor() { }

  ngOnInit(): void {
  }

}
