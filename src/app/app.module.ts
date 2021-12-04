import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Mod1Module } from './mod1/mod1.module'; 
import { Mod2Module } from './mod2/mod2.module';
import { Mod3Module } from './mod3/mod3.module';
import { Mod4Module } from './mod4/mod4.module';
import { Mod5Module } from './mod5/mod5.module';
import { PantallasModule } from './pantallas/pantallas.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Mod1Module,
    Mod2Module,
    Mod3Module,
    Mod4Module,
    Mod5Module,
    PantallasModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
