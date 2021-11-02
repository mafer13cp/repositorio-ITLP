import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonComponent } from './home-button/home-button.component';
import { HeaderITLPComponent } from './header-itlp/header-itlp.component';
import { FooterITLPComponent } from './footer-itlp/footer-itlp.component';
import { LogInContainerComponent } from './log-in-container/log-in-container.component';
import { SignUpContainerComponent } from './sign-up-container/sign-up-container.component';
import { InputTextComponent } from './input-text/input-text.component';
import { ButtonRegComponent } from './button-reg/button-reg.component';
import { ButtonIconComponent } from './button-icon/button-icon.component';



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
