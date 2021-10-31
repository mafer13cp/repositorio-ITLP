import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeInputTextComponent } from './large-input-text/large-input-text.component';

import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    LargeInputTextComponent
  ],
  imports: [
    CommonModule,
    MatInputModule
  ],
  exports:[LargeInputTextComponent] //Exportamos los componenetes para poder utilizarlos
})
export class Mod3Module { }
