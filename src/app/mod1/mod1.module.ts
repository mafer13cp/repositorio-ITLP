import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonComponent } from './homeButton/homeButton.component';
import { HeaderITLPComponent } from './headerItlp/headerItlp.component';
import { FooterITLPComponent } from './footerItlp/footerItlp.component';
import { LogInContainerComponent } from './logInContainer/logInContainer.component';
import { SignUpContainerComponent } from './signUpContainer/signUpContainer.component';
import { InputTextComponent } from './inputText/inputText.component';
import { ButtonRegComponent } from './buttonReg/buttonReg.component';
import { ButtonIconComponent } from './buttonIcon/buttonIcon.component';



@NgModule({
  declarations: [
    HomeButtonComponent,
    HeaderITLPComponent,
    FooterITLPComponent,
    LogInContainerComponent,
    SignUpContainerComponent,
    InputTextComponent,
    ButtonRegComponent,
    ButtonIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeButtonComponent,
    HeaderITLPComponent,
    FooterITLPComponent,
    LogInContainerComponent,
    SignUpContainerComponent,
    InputTextComponent,
    ButtonRegComponent,
    ButtonIconComponent
  ]
})
export class Mod1Module { }
