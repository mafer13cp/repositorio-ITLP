import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggeadoService } from 'src/app/services/loggeado.service';

@Component({
  selector: 'addAdmins',
  templateUrl: './addAdmins.component.html',
  styleUrls: ['./addAdmins.component.css','../../app.component.css']
})
export class AddAdminsComponent implements OnInit {
  idLog:string;

  constructor(private loggeado:LoggeadoService,private router:Router) { 
    if(!loggeado.getUsrId())
        router.navigate(['/login']);
  }

  ngOnInit(): void {
    
  }

}
