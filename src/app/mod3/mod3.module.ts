import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LargeInputTextComponent } from './largeInputText/largeInputText.component';
import { DropDownListComponent } from './dropDownList/dropDownList.component';
import { SelectDropDownComponent } from './selectDropDown/selectDropDown.component'
import { UploadFileComponent } from './uploadFile/uploadFile.component';
import { ReturnButtonComponent } from './returnButton/returnButton.component';
import { DocInfoComponent } from './docInfo/docInfo.component';
import { AdminAddComponent } from './adminAdd/adminAdd.component';
import { Mod1Module } from '../mod1/mod1.module';
import { Mod2Module } from '../mod2/mod2.module';
//Librerias de MUI
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipTagComponent } from './chipTag/chipTag.component';

//chipTAG
import {MatChipsModule} from '@angular/material/chips';
import {MaterialExampleModule} from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [
    LargeInputTextComponent,
    DropDownListComponent,
    SelectDropDownComponent,
    UploadFileComponent,
    ReturnButtonComponent,
    DocInfoComponent,
    AdminAddComponent,
    AutocompleteComponent,
    ChipTagComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    Mod1Module,
    Mod2Module,
    MatChipsModule,
    MaterialExampleModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  exports:[
    LargeInputTextComponent,
    DropDownListComponent,
    SelectDropDownComponent,
    UploadFileComponent,
    ReturnButtonComponent,
    DocInfoComponent,
    AdminAddComponent,
    AutocompleteComponent,
    ChipTagComponent
  ] //Exportamos los componenetes para poder utilizarlos en otros modulos
})
export class Mod3Module { }
