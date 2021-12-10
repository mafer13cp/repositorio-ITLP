import { Component, OnInit,Input,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'dropDownList',
  templateUrl: './dropDownList.component.html',
  styleUrls: ['./dropDownList.component.css','../../app.component.css']
})
export class DropDownListComponent implements OnInit {
  @Input() ops:string[] = ["Documentos","Autores","Materias","Etiquetas"];
  @ViewChild('btn') boton:ElementRef;
  @Output() public DDLEvent = new EventEmitter;
  @Input() default:string = "Elige un filtro";
  @ViewChild('contenido') contenido:ElementRef;
  @Input() size = "long";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnSelectEvent(control:any){
    const texto = control.srcElement.innerHTML;
    this.boton.nativeElement.innerHTML = texto;
    this.DDLEvent.emit(texto);
    this.contenido.nativeElement.style.visibility = "hidden";
  }

  ngMouseOver(){
    this.contenido.nativeElement.style.visibility = "visible";
  }

  ngMouseOut(){
    this.contenido.nativeElement.style.visibility = "hidden";
  }

}
