import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentoService } from 'src/app/services/documento.service';
import { MateriaService } from 'src/app/services/materia.service';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'adminResult',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css','../../app.component.css']
})
export class AdminResultComponent implements OnInit {
  @Input() id:any;
  @Input() nombre:any;
  @Input() tipo:string;
  idLog:string;
  @Output() public AREvent = new EventEmitter();

  constructor(private documento:DocumentoService,private materia:MateriaService, private tag:TagService,
    private route:ActivatedRoute,readonly snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbBlack"]
    });
  }

  ngEliminarElemento(){
    if(this.tipo == "Documento"){
      this.documento.delDoc(this.id).subscribe(res=>{
        console.log(res);
        this.openSnackBar("El documento se eliminó con éxito","OK");
        this.AREvent.emit("Documentos");
      });
    }
    else if(this.tipo == "Materia"){
      this.materia.delMat(this.id).subscribe(res=>{
        console.log(res);
        this.openSnackBar("La materia se eliminó con éxito","OK");
        this.AREvent.emit("Materias");
      });
    }
    else if(this.tipo == "Tag"){
      this.tag.delTag(this.id).subscribe(res=>{
        console.log(res);
        this.openSnackBar("El tag se eliminó con éxito","OK");
        this.AREvent.emit("Etiquetas");
      });
    }
  }

}
