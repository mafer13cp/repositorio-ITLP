import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDocUsrComponent } from './viewDocUsr/viewDocUsr.component';
import { ViewDocAutComponent } from './viewDocAut/viewDocAut.component';
import { ViewDocPanComponent } from './viewDocPan/viewDocPan.component';
import { SubirDocComponent } from './subirDoc/subirDoc.component';
import { BusAdminComponent } from './busAdmin/busAdmin.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ResBusquedaComponent } from './resBusqueda/resBusqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AddAdminsComponent } from './addAdmins/addAdmins.component';
import { PerfilUsrComponent } from './perfilUsr/perfilUsr.component';
import { DocGenComponent } from './docGen/docGen.component';
import { MatGenComponent } from './matGen/matGen.component';
import { TemGenComponent } from './temGen/temGen.component';
import { TagGenComponent } from './tagGen/tagGen.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { Mod1Module } from '../mod1/mod1.module';
import { Mod2Module } from '../mod2/mod2.module';
import { Mod3Module } from '../mod3/mod3.module';
import { Mod4Module } from '../mod4/mod4.module';
import { Mod5Module } from '../mod5/mod5.module';
import { AboutUsComponent } from './aboutUs/about-us.component';
import { EditarUsuarioComponent } from './editarUsuario/editar-usuario.component';
import { EditarDocComponent } from './editarDoc/editar-doc.component';
import { AyudaComponent } from './ayuda/ayuda.component';
@NgModule({
  declarations: [
    ViewDocUsrComponent,
    ViewDocAutComponent,
    ViewDocPanComponent,
    SubirDocComponent,
    BusAdminComponent,
    LoginComponent,
    RegistroComponent,
    ResBusquedaComponent,
    InicioComponent,
    AddAdminsComponent,
    PerfilUsrComponent,
    DocGenComponent,
    MatGenComponent,
    TemGenComponent,
    TagGenComponent,
    AboutUsComponent,
    EditarUsuarioComponent,
    EditarDocComponent,
    AyudaComponent
  ],
  imports: [
    CommonModule,
    Mod1Module,
    Mod2Module,
    Mod3Module,
    Mod4Module,
    Mod5Module,
    MatSnackBarModule
  ],
  exports: [
    ViewDocUsrComponent,
    ViewDocAutComponent,
    ViewDocPanComponent,
    SubirDocComponent,
    BusAdminComponent,
    LoginComponent,
    RegistroComponent,
    ResBusquedaComponent,
    InicioComponent,
    AddAdminsComponent,
    PerfilUsrComponent,
    DocGenComponent,
    MatGenComponent,
    TemGenComponent,
    TagGenComponent,
    AboutUsComponent,
    EditarUsuarioComponent,
    EditarDocComponent
  ]
})
export class PantallasModule { }
