import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentHistoryComponent } from './comment-history/comment-history.component';
import { CommentComponent } from './comment/comment.component';
import { DocumentFullComponent } from './document-full/document-full.component';
import { SearchByBarComponent } from './search-by-bar/search-by-bar.component';
import { SpecificSearchComponent } from './specific-search/specific-search.component';
import { DevCardComponent } from './dev-card/dev-card.component';

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
