import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'addAdmins',
  templateUrl: './addAdmins.component.html',
  styleUrls: ['./addAdmins.component.css','../../app.component.css']
})
export class AddAdminsComponent implements OnInit {
  idLog:string;

  constructor(private router:Router, private route:ActivatedRoute,private usuario:UsuarioService) { 
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    console.log(this.idLog);
    this.usuario.getUsuarios().subscribe(usuarios=>{
      console.log(usuarios);
      let esAdmin = false;
      if(usuarios!=null){
        for(let i = 0; i < usuarios.length; i++){
          if(usuarios[i].fk_rol == 3){
            if(usuarios[i].id == this.idLog){
              esAdmin = true;
            }
          }
        }
        if(!esAdmin)
          this.router.navigate([`/inicio/${this.idLog}`]);
      }
    });
  }

  ngOnInit(): void {
    
  }

}
