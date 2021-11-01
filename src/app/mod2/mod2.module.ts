import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod2RoutingModule } from './mod2-routing.module';
import { TagGridComponent } from './tag-grid/tag-grid.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccordionComponent } from './accordion/accordion.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { HeaderLineComponent } from './header-line/header-line.component';
import { DocMiniComponent } from './doc-mini/doc-mini.component';
import { CardDocComponent } from './card-doc/card-doc.component';

//#region MUI

import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

//#endregion

@NgModule({
  declarations: [
    TagGridComponent,
    SearchBarComponent,
    SearchFieldComponent,
    SideNavComponent,
    AccordionComponent,
    GridCardsComponent,
    HeaderLineComponent,
    DocMiniComponent,
    CardDocComponent
  ],
  imports: [
    CommonModule,
    Mod2RoutingModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    TagGridComponent,
    SearchBarComponent,
    SearchFieldComponent,
    SideNavComponent,
    AccordionComponent,
    GridCardsComponent,
    HeaderLineComponent,
    DocMiniComponent,
    CardDocComponent
  ]
})
export class Mod2Module { }
