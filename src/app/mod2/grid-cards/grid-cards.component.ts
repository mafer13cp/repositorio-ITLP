import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gridCards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css','../../app.component.css']
})
export class GridCardsComponent implements OnInit {

  //private docs: object[] = [];

  @Input() title: string = "title";
  /* @Input()
    set docList (docList) {
      this.docs = docList.map(doc => myDocs (doc))
    }

  get docList () {
    return this.docs;
  } */

  constructor() { }

  ngOnInit(): void {
  }

}

/* function myDocs (doc:object) {
  return {
    ...doc,
    docName: doc,
    autorName: doc
  }
} */
