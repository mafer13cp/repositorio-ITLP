import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggeadoService } from 'src/app/services/loggeado.service';

@Component({
  selector: 'aboutUs',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css','../../app.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private loggeado:LoggeadoService,private router:Router) { 
    if(!loggeado.getUsrId())
        router.navigate(['/login']);
  }

  ngOnInit(): void {
    
  }

  ngDev(dev:string){
    if(dev == "1")
      this.router.navigate([`/perfilUsr/${"17310710"}`]);
    else if(dev == "2")
      this.router.navigate([`/perfilUsr/${"17310749"}`]);
    else if(dev == "3")
      this.router.navigate([`/perfilUsr/${"17310715"}`]);
  }



}
