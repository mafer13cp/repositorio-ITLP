import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Otro } from 'src/app/interfaces/otros';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'accordionUsr',
  templateUrl: './acoordion-usr.component.html',
  styleUrls: ['./acoordion-usr.component.css','../../app.component.css']
})
export class AcoordionUsrComponent implements OnInit {

  @Output() public AccEvent= new EventEmitter();

  @Input() listUsuarios: Usuario[];
  @Input() listOtros: Otro[];
  @Input() otros: boolean = false;
  autor = false;

  rolIcon: string[] = ["","school", "history_edu", "work", "local_police"];
  ttt: string[] = ["","Este usuario es un alumno de la institutción", 
                    "Este usuario es un maestro de la institutción",
                    "Este usuario es un empleado de la institutción",
                    "Este usuario es un administrador del sitio"];

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    let x = this.route.snapshot.paramMap.get('a');
    if (x == 'a'){
      this.autor = true;
    }
  }
  
  ngOnClickUsr(control: any){
    //Mandar el valor del tittle (tags, materia o docs) y el id de la selección
    const texto = control.srcElement.innerHTML;
    this.AccEvent.emit(texto);
  }
}
