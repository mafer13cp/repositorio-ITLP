import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pantallas/aboutUs/about-us.component';
import { AddAdminsComponent } from './pantallas/addAdmins/addAdmins.component';
import { AyudaComponent } from './pantallas/ayuda/ayuda.component';
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
    path:'inicio/:idLog',
    component:InicioComponent
  },
  {
    path:'aboutUs/:idLog',
    component:AboutUsComponent
  },
  {
    path:'addAdmins/:idLog',
    component:AddAdminsComponent
  },
  {
    path:'busAdmin/:idLog',
    component:BusAdminComponent
  },
  {
    path:'docGen/:idLog',
    component:DocGenComponent
  },
  {
    path:'editarDoc/:idLog',
    component:EditarDocComponent
  },
  {
    path:'editarUsuario/:idLog',
    component:EditarUsuarioComponent
  },
  {
    path:'matGen/:idLog',
    component:MatGenComponent
  },
  {
    path:'perfilUsr/:idLog',
    component:PerfilUsrComponent
  },
  {
    path:'perfilUsr/:idLog/:idUsr',
    component:PerfilUsrComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'resBusqueda/:idLog',
    component:ResBusquedaComponent
  },
  {
    path:'resBusqueda/:idLog/:filtro/:texto',
    component:ResBusquedaComponent
  },
  {
    path:'subirDoc/:idLog',
    component:SubirDocComponent
  },
  {
    path:'tagGen/:idLog',
    component:TagGenComponent
  },
  {
    path:'viewDocAut/:idLog/:idDoc/:a',
    component:ViewDocAutComponent
  },
  {
    path:'viewDocPan/:idLog/:idDoc',
    component:ViewDocPanComponent
  },
  {
    path:'viewDocUsr/:idLog/:idDoc/:a',
    component:ViewDocUsrComponent
  },
  {
    path: 'ayuda',
    component:AyudaComponent
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
