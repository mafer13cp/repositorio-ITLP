import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeInputTextComponent } from './large-input-text/large-input-text.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { SelectDropDownComponent } from './select-drop-down/select-drop-down.component'
import { UploadFileComponent } from './upload-file/upload-file.component';
import { RatingComponent } from './rating/rating.component';
//Librerias de MUI
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReturnButtonComponent } from './return-button/return-button.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    LargeInputTextComponent,
    DropDownListComponent,
    SelectDropDownComponent,
    UploadFileComponent,
    RatingComponent,
    ReturnButtonComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports:[
    LargeInputTextComponent,
    DropDownListComponent,
    SelectDropDownComponent,
    UploadFileComponent,
    RatingComponent,
    ReturnButtonComponent
  ] //Exportamos los componenetes para poder utilizarlos en otros modulos
})
export class Mod3Module { }
