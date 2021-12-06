import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggeadoService } from 'src/app/services/loggeado.service';

@Component({
  selector: 'temGen',
  templateUrl: './temGen.component.html',
  styleUrls: ['./temGen.component.css']
})
export class TemGenComponent implements OnInit {

  constructor(private router:Router, private loggeado:LoggeadoService) { 
    if(!loggeado.getUsrId())
        router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
