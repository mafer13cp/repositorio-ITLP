import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeInputTextComponent } from './large-input-text/large-input-text.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
//Librerias de MUI
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'

@NgModule({
  declarations: [
    LargeInputTextComponent,
    DropDownListComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports:[
    LargeInputTextComponent,
    DropDownListComponent
  ] //Exportamos los componenetes para poder utilizarlos en otros modulos
})
export class Mod3Module { }
