import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/interfaces/materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'matGen',
  templateUrl: './matGen.component.html',
  styleUrls: ['./matGen.component.css']
})
export class MatGenComponent implements OnInit {
  datos:any[];
  materias:Materia[];
  count:number;

  constructor(private materia:MateriaService) { }

  ngOnInit(): void {
    
  }

  

}
