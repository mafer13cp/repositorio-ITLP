import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mod3Module } from './mod3/mod3.module';

import { Mod1Module } from './mod1/mod1.module'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Mod3Module,
    Mod1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
