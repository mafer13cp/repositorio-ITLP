import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/mod1/delete-dialog/delete-dialog.component';

@Component({
  selector: 'viewDocAut',
  templateUrl: './viewDocAut.component.html',
  styleUrls: ['./viewDocAut.component.css']
})
export class ViewDocAutComponent implements OnInit {
  documentoId:number = 0;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngClickAcc(text: string)
  {
    console.log("desde view aut: " + text);
  }

  ngOnEdit(control: any)
  {
    console.log("editar desde view autor");
  }
  ngOnDelete(control: any)
  {
    console.log("eliminar desde view autor");
    this.dialog.open(DeleteDialogComponent, {data: {documentoId: this.documentoId }}); //Recibe el id del doc
  }
}
