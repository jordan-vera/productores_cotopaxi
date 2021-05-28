import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { ActividadesComponent } from './panel-admin/actividades/actividades.component';
import { AgregarProductoresComponent } from './panel-admin/agregar-productores/agregar-productores.component';
import { ConsultarProductoresComponent } from './panel-admin/consultar-productores/consultar-productores.component';
import { PerfilComponent } from './panel-admin/perfil/perfil.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'panel-admin',
    component: PanelAdminComponent,
    children: [
      {
        path: '',
        component: ActividadesComponent
      },
      {
        path: 'actividades',
        component: ActividadesComponent
      },
      {
        path: 'agregar-productores',
        component: AgregarProductoresComponent
      },
      {
        path: 'consultar-productores',
        component: ConsultarProductoresComponent
      },
      {
        path: 'perfil',
        component: PerfilComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
