import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Documento } from 'src/app/interfaces/documento';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  documentoId: number;
}
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    readonly snackBar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data.documentoId); //id del documento
  }
  ngOnCancel() {
    this.dialogRef.close();
  }
  ngOnDelete() {
    //Aquí se manda a eliminar el documento
    this.dialogRef.close();
    this.openSnackBar("El archivo ha sido eliminado.", "Ok");
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbRed"]
    });
  }

}
