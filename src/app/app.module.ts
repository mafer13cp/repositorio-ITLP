import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mod1Module } from './mod1/mod1.module'; 
import { Mod2Module } from './mod2/mod2.module';
import { Mod3Module } from './mod3/mod3.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Mod2Module,
    AppRoutingModule,
    BrowserAnimationsModule,
    Mod1Module
    Mod2Module,
    Mod3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
