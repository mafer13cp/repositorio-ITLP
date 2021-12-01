import { Component, OnInit, Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

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

  constructor() { 
  }

  ngOnInit(): void {
    setTimeout(() => {
      let i = 0;
      while (i < this.numero) {
        this.controlesRate[i].innerHTML = "star";
        i++;
      }
    }, 100);
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
  }


}
