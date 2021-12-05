import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { DocumentoService } from 'src/app/services/documento.service';

@Component({
  selector: 'docMini',
  templateUrl: './doc-mini.component.html',
  styleUrls: ['./doc-mini.component.css','../../app.component.css']
})
export class DocMiniComponent implements OnInit {

  @Input() docTitle: string = "title";
  @Input() autorName: string = "name";
  @Input() idDoc:number = 0;

  constructor(private documento:DocumentoService,private router:Router,
    private comunicacion:ComunicacionService) { 
  }

  ngOnInit(): void { 
  }

  ngShowDoc(){
    this.documento.getUsuariosNomDoc(this.docTitle).subscribe(data=>{
      let esAutor = false;
      if(data.length != 0){
        console.log(data);
        for(let i = 0; i < data.length; i++){
          if(data[i].usuarios_documento != null){
            for(let j = 0; j < data[i].usuarios_documento.length; j++){
              if(data[i].usuarios_documento[j].nombre =="Alfonso Rochín Gómez" && data[i].id == this.idDoc){ //En vez de comparar con autorName debe comparar con el nombre del usuario loggeado.
                esAutor = true;
              }
            }
          }
        }
        if(esAutor){ 
          this.router.navigate([`/viewDocAut/${this.idDoc}/${'a'}`]);//Definir ruta en donde reciban id del documento y el nombre del autor.
        }
        else{
          this.router.navigate([`/viewDocUsr/${this.idDoc}/${'u'}`]);//Definir ruta en donde reciban id del documento.
        }
      }
    });
  }
}
