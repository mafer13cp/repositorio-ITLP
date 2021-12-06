import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggeadoService } from 'src/app/services/loggeado.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css','../../app.component.css']
})
export class AyudaComponent implements OnInit {

  constructor(private loggeado:LoggeadoService,private router:Router) { 
    if(!loggeado.getUsrId())
        router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
