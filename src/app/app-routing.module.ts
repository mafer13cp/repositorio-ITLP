import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pantallas/aboutUs/about-us.component';
import { AddAdminsComponent } from './pantallas/addAdmins/addAdmins.component';
import { BusAdminComponent } from './pantallas/busAdmin/busAdmin.component';
import { DocGenComponent } from './pantallas/docGen/docGen.component';
import { EditarDocComponent } from './pantallas/editarDoc/editar-doc.component';
import { EditarUsuarioComponent } from './pantallas/editarUsuario/editar-usuario.component';
import { InicioComponent } from './pantallas/inicio/inicio.component';
import { LoginComponent } from './pantallas/login/login.component';
import { MatGenComponent } from './pantallas/matGen/matGen.component';
import { PerfilUsrComponent } from './pantallas/perfilUsr/perfilUsr.component';
import { RegistroComponent } from './pantallas/registro/registro.component';
import { ResBusquedaComponent } from './pantallas/resBusqueda/resBusqueda.component';
import { SubirDocComponent } from './pantallas/subirDoc/subirDoc.component';
import { TagGenComponent } from './pantallas/tagGen/tagGen.component';
import { ViewDocAutComponent } from './pantallas/viewDocAut/viewDocAut.component';
import { ViewDocPanComponent } from './pantallas/viewDocPan/viewDocPan.component';
import { ViewDocUsrComponent } from './pantallas/viewDocUsr/viewDocUsr.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'aboutUs',
    component:AboutUsComponent
  },
  {
    path:'addAdmins',
    component:AddAdminsComponent
  },
  {
    path:'busAdmin',
    component:BusAdminComponent
  },
  {
    path:'docGen',
    component:DocGenComponent
  },
  {
    path:'editarDoc',
    component:EditarDocComponent
  },
  {
    path:'editarUsuario/:idUsr',
    component:EditarUsuarioComponent
  },
  {
    path:'matGen',
    component:MatGenComponent
  },
  {
    path:'perfilUsr/:idUsr',
    component:PerfilUsrComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'resBusqueda',
    component:ResBusquedaComponent
  },
  {
    path:'resBusqueda/:filtro/:texto',
    component:ResBusquedaComponent
  },
  {
    path:'subirDoc',
    component:SubirDocComponent
  },
  {
    path:'tagGen',
    component:TagGenComponent
  },
  {
    path:'viewDocAut/:idDoc',
    component:ViewDocAutComponent
  },
  {
    path:'viewDocPan/:idDoc',
    component:ViewDocPanComponent
  },
  {
    path:'viewDocUsr/:idDoc',
    component:ViewDocUsrComponent
  },
  {
    path: '**',
    redirectTo:'/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
