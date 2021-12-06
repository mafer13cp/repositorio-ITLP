import { Component, OnInit, Input } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { ComunicacionService } from 'src/app/services/comunicacion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'documentFull',
  templateUrl: './documentFull.component.html',
  styleUrls: ['./documentFull.component.css','../../app.component.css']
})
export class DocumentFullComponent implements OnInit {

  @Input() title: string = "title";
  @ViewChild('vista') embed: ElementRef;
  @Input() url:string;

  constructor(private comunicacion:ComunicacionService,private location:Location) { }

  ngOnInit(): void {
    this.comunicacion.getUrlFull$().subscribe(url=>{
      this.embed.nativeElement.src=url;
    });
  }

  ngOnClick() {
    this.location.back();
  }

}
