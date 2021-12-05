import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Documento } from 'src/app/interfaces/documento';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentoService } from 'src/app/services/documento.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface DialogData {
  documentoId: number;
  idLog:number;
}
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    readonly snackBar: MatSnackBar, private documento:DocumentoService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.data.documentoId); //id del documento
    console.log(this.data.idLog);
  }
  ngOnCancel() {
    this.dialogRef.close();
  }
  ngOnDelete() {
    //Aquí se manda a eliminar el documento
    this.documento.delDoc(this.data.documentoId).subscribe(data=>{
      console.log(data);
      
      this.dialogRef.close();
      this.openSnackBar("El archivo ha sido eliminado.", "Ok");
      setTimeout(() => {
        this.router.navigate([`/inicio/${this.data.idLog}`]);
      }, 1000);
    });
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      panelClass: ["sbRed"]
    });
  }

}
