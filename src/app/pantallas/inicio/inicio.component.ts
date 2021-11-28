import { Component, OnInit } from '@angular/core';
import { BusquedaService } from 'src/app/services/busqueda.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css','../../app.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private bus:BusquedaService) { }

  ngOnInit(): void {
    console.log("Documentos");
    console.log(this.bus.getDocYUsr());
  }

}
