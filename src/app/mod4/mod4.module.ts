import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from './commentSection/commentSection.component';
import { AddCommentComponent } from './addComment/addComment.component';
import { CommentHistoryComponent } from './commentHistory/commentHistory.component';
import { CommentComponent } from './comment/comment.component';
import { DocumentFullComponent } from './documentFull/documentFull.component';
import { SearchByBarComponent } from './searchByBar/searchByBar.component';
import { SpecificSearchComponent } from './specificSearch/specificSearch.component';
import { DevCardComponent } from './devCard/devCard.component';

import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    CommentSectionComponent,
    AddCommentComponent,
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
    MatSelectModule
  ],
  exports: [
    CommentSectionComponent,
    AddCommentComponent,
    CommentHistoryComponent,
    CommentComponent,
    DocumentFullComponent,
    SearchByBarComponent,
    SpecificSearchComponent,
    DevCardComponent
  ]
})
export class Mod4Module { }
