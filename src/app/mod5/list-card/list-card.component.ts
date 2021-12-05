import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'listCard',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {

  @Input() content: string = "content";
  @Input() name: string = "name";
  @Input() title: string = "title";
  @Input() datos: any[];
  @Input() tipo:string;
  idLog:string;

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
  }

  ngClickCard(datos:any){
    if(this.tipo == "Tag"){
      this.router.navigate([`/resBusqueda/${this.idLog}/${"Tag"}/${datos[0]}`]);
    }
    else if (this.tipo == "Materia"){
      this.router.navigate([`/resBusqueda/${this.idLog}/${"Materia"}/${datos[0]}`]);
    }
    else if(this.tipo == "Documento"){
      this.router.navigate([`/viewDocPan/${this.idLog}/${datos[1]}`]);
    }
  }
}
