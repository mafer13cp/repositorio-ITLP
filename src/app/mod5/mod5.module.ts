import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { VerticalDivisorComponent } from './vertical-divisor/vertical-divisor.component';
import { AdminSearchResultComponent } from './admin-search-result/admin-search-result.component';
import { AdminResultDocComponent } from './admin-result-doc/admin-result-doc.component';
import { AdminResultComponent } from './admin-result/admin-result.component';
import { CardResultComponent } from './card-result/card-result.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    UserInfoComponent,
    VerticalDivisorComponent,
    AdminSearchResultComponent,
    AdminResultDocComponent,
    AdminResultComponent,
    CardResultComponent,
    AdminDeleteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    UserInfoComponent,
    VerticalDivisorComponent,
    AdminSearchResultComponent,
    AdminResultDocComponent,
    AdminResultComponent,
    CardResultComponent,
    AdminDeleteComponent
  ]
})
export class Mod5Module { }
