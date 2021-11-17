import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from './commentSection/commentSection.component';
import { CommentHistoryComponent } from './commentHistory/commentHistory.component';
import { CommentComponent } from './comment/comment.component';
import { DocumentFullComponent } from './documentFull/documentFull.component';
import { SearchByBarComponent } from './searchByBar/searchByBar.component';
import { SpecificSearchComponent } from './specificSearch/specificSearch.component';
import { DevCardComponent } from './devCard/devCard.component';
import { Mod1Module } from '../mod1/mod1.module';
import { Mod2Module } from '../mod2/mod2.module';
import { Mod3Module } from '../mod3/mod3.module';
import { Mod5Module } from '../mod5/mod5.module';


import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    CommentSectionComponent,
    CommentHistoryComponent,
    CommentComponent,
    DocumentFullComponent,
    SearchByBarComponent,
    SpecificSearchComponent,
    DevCardComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    Mod1Module,
    Mod2Module,
    Mod3Module,
    Mod5Module
  ],
  exports: [
    CommentSectionComponent,
    CommentHistoryComponent,
    CommentComponent,
    DocumentFullComponent,
    SearchByBarComponent,
    SpecificSearchComponent,
    DevCardComponent
  ]
})
export class Mod4Module { }
