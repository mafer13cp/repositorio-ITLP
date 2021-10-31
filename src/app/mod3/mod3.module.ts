import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeInputTextComponent } from './large-input-text/large-input-text.component';



@NgModule({
  declarations: [
    LargeInputTextComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LargeInputTextComponent] //Exportamos los componenetes para poder utilizarlos
})
export class Mod3Module { }
