import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod2RoutingModule } from './mod2-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AccordionComponent } from './accordion/accordion.component';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { HeaderLineComponent } from './header-line/header-line.component';
import { DocMiniComponent } from './doc-mini/doc-mini.component';
import { CardDocComponent } from './card-doc/card-doc.component';
import { AccordionTagComponent } from './accordion-tag/accordion-tag.component';
import { AccordionTextComponent } from './accordion-text/accordion-text.component';
import { AccordionRateComponent } from './accordion-rate/accordion-rate.component';
import { DocSideInfoComponent } from './doc-side-info/doc-side-info.component';

//#region MUI

import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { DividerComponent } from './divider/divider.component';
import { InputTextComponent } from './input-line/input-text.component';
import { AccordionTagAutComponent } from './accordion-tag-aut/accordion-tag-aut.component';
import { AccordionAutComponent } from './accordion-aut/accordion-aut.component';
import { AccordionTextAutComponent } from './accordion-text-aut/accordion-text-aut.component';
import { SelectUserIconComponent } from './select-user-icon/select-user-icon.component';
import { AcoordionUsrComponent } from './acoordion-usr/acoordion-usr.component';

//#endregion

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchFieldComponent,
    SideNavComponent,
    AccordionComponent,
    GridCardsComponent,
    HeaderLineComponent,
    DocMiniComponent,
    CardDocComponent,
    AccordionTagComponent,
    AccordionTextComponent,
    AccordionRateComponent,
    DividerComponent,
    DocSideInfoComponent,
    InputTextComponent,
    AccordionTagAutComponent,
    AccordionAutComponent,
    AccordionTextAutComponent,
    SelectUserIconComponent,
    AcoordionUsrComponent,
  ],
  imports: [
    CommonModule,
    Mod2RoutingModule,
    MatChipsModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
  ],
  exports: [
    SearchBarComponent,
    SearchFieldComponent,
    SideNavComponent,
    AccordionComponent,
    GridCardsComponent,
    HeaderLineComponent,
    DocMiniComponent,
    CardDocComponent,
    AccordionTagComponent,
    AccordionTextComponent,
    AccordionRateComponent,
    DividerComponent,
    DocSideInfoComponent,
    InputTextComponent,
    AccordionTagAutComponent,
    AccordionAutComponent,
    AccordionTextAutComponent,
    SelectUserIconComponent,
    AcoordionUsrComponent
  ]
})
export class Mod2Module { }
