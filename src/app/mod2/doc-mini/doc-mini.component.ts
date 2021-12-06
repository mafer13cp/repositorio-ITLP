import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'docMini',
  templateUrl: './doc-mini.component.html',
  styleUrls: ['./doc-mini.component.css','../../app.component.css']
})
export class DocMiniComponent implements OnInit {

  @Input() docTitle: string = "title";
  @Input() autorName: string = "name";
  @Input() idDoc:number = 0;
  @Input() imgDoc:string;
  idLog:string;
  usr:Usuario;

  constructor(private documento:DocumentoService,private router:Router,
    private comunicacion:ComunicacionService,private route:ActivatedRoute,private usuario:UsuarioService) { 
  }

  ngOnInit(): void { 
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.usuario.getUsuarioById(this.idLog).subscribe(data=>{
      this.usr = data[0];
    });
  }

  ngShowDoc(){
    this.documento.getUsuariosNomDoc(this.docTitle).subscribe(data=>{
      let esAutor = false;
      if(data.length != 0){
        for(let i = 0; i < data.length; i++){
          if(data[i].usuarios_documento != null){
            for(let j = 0; j < data[i].usuarios_documento.length; j++){
              if((data[i].usuarios_documento[j].id == this.idLog && data[i].id == this.idDoc)||(this.usr.fk_rol == 4)){ //En vez de comparar con autorName debe comparar con el nombre del usuario loggeado.
                esAutor = true;
              }
            }
          }
        }
        if(esAutor){ 
          this.router.navigate([`/viewDocAut/${this.idLog}/${this.idDoc}/${'a'}`]);//Definir ruta en donde reciban id del documento y el nombre del autor.
        }
        else{
          this.router.navigate([`/viewDocUsr/${this.idLog}/${this.idDoc}/${'u'}`]);//Definir ruta en donde reciban id del documento.
        }
      }
    });
  }
}
