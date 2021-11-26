import { Component, OnInit, Input } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'documentFull',
  templateUrl: './documentFull.component.html',
  styleUrls: ['./documentFull.component.css','../../app.component.css']
})
export class DocumentFullComponent implements OnInit {

  @Input() title: string = "title";
  @ViewChild('vista') embed: ElementRef;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.embed.nativeElement.src="https://firebasestorage.googleapis.com/v0/b/repoitlp-c59be.appspot.com/o/Documentos%2FAgentes_Inteligentes.pdf?alt=media&token=e354f8a7-6429-40de-919d-bfdefd1709bf";
    }, 100);
  }

}
