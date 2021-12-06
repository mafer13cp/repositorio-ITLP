import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'accordionRate',
  templateUrl: './accordion-rate.component.html',
  styleUrls: ['./accordion-rate.component.css','../../app.component.css']
})
export class AccordionRateComponent implements OnInit {

  @Input() title: string = "title";
  @Input() numero: number = 5;
  controles: any = document.getElementsByClassName("star");
  controlesRate: any = document.getElementsByClassName("rate");
  idLog:string;
  idDoc:number;

  constructor(private route:ActivatedRoute, private rating:RatingService) { 
  }

  ngOnInit(): void {
    this.idLog = this.route.snapshot.paramMap.get('idLog');
    this.idDoc = parseInt(this.route.snapshot.paramMap.get('idDoc'));
    
    this.rating.filterRatingByDoc(this.idDoc).subscribe(data=>{
      console.log(data);
      console.log(data[0]);
      if(data.length == null){
        this.numero = 0;
      }
      else{
        this.numero = 0;
        data.forEach(rat => {
          this.numero += rat.calificacion;
          console.log(rat.calificacion);
        });
        this.numero = Math.round(this.numero/data.length);
        for(let i = 0; i < this.controlesRate.length; i++){
          this.controlesRate[i].innerHTML = "star_border";
        }
        for(let i = 0; i < this.numero; i++){
          this.controlesRate[i].innerHTML = "star";
        }

        let existe = 0;
        let calificacion = -1;
        for(let i = 0; i < data.length; i++){
          if(data[i].fk_documento == this.idDoc && data[i].fk_usuario == this.idLog){
            existe = 1;
            calificacion = data[i].calificacion;
          }
        }
        if(existe == 1){
          let x = 0;
          while (x < this.controles.length) {
            this.controles[x].innerHTML = "star_border";
            x++;
          }
          let i = 0;
          while (i < calificacion) {
            this.controles[i].innerHTML = "star";
            i++;
          }
        }
      }
    });
    /*setTimeout(() => {
      let i = 0;
      while (i < this.numero) {
        this.controlesRate[i].innerHTML = "star";
        i++;
      }
    }, 100);
    */
  }

  ngOnClick(num: number): void {
    let x = 0;
    while (x < this.controles.length) {
      this.controles[x].innerHTML = "star_border";
      x++;
    }
    let i = 0;
    while (i < num) {
      this.controles[i].innerHTML = "star";
      i++;
    }
    console.log("rating: " + num);
    //Aquí se actualiza rating
    this.rating.filterRatingByDoc(this.idDoc).subscribe(data=>{
      if(data.length == 0){
        this.rating.postRating({id:null,calificacion:num,fk_documento:this.idDoc,fk_usuario:this.idLog}).subscribe(res=>{
          console.log("1");
          console.log("Voto guardado");
          console.log(res);
          this.ngOnInit();
        });
      }
      else{
        let existe = 0;
        let idRat = -1;
        for(let i = 0; i < data.length; i++){
          if(data[i].fk_documento == this.idDoc && data[i].fk_usuario == this.idLog){
            existe = 1;
            idRat = data[i].id;
          }
        }
        if(existe == 0){
          this.rating.postRating({id:null,calificacion:num,fk_documento:this.idDoc,fk_usuario:this.idLog}).subscribe(res=>{
            console.log("2");
            console.log("Voto guardado");
            console.log(res);
            this.ngOnInit();
          });
        }
        else{
          this.rating.putRating({id:idRat,calificacion:num,fk_documento:this.idDoc,fk_usuario:this.idLog}).subscribe(res=>{
            console.log("3");
            console.log("Voto actualizado");
            console.log(res);
            this.ngOnInit();
          });
        }
      }
    });
  }


}
