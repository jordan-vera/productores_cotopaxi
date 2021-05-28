import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { ActividadesComponent } from './panel-admin/actividades/actividades.component';
import { AgregarProductoresComponent } from './panel-admin/agregar-productores/agregar-productores.component';
import { ConsultarProductoresComponent } from './panel-admin/consultar-productores/consultar-productores.component';
import { PerfilComponent } from './panel-admin/perfil/perfil.component';
import { HomeComponent } from './index/home/home.component';
import { ResultadosPorActividadesComponent } from './index/resultados-por-actividades/resultados-por-actividades.component';
import { ResultadosPorCantonesComponent } from './index/resultados-por-cantones/resultados-por-cantones.component';
import { ResultadosPorBusquedaComponent } from './index/resultados-por-busqueda/resultados-por-busqueda.component';
import { ProductorShowComponent } from './index/productor-show/productor-show.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search-actividad',
        component: ResultadosPorActividadesComponent
      },
      {
        path: 'search-canton',
        component: ResultadosPorCantonesComponent
      },
      {
        path: 'search',
        component: ResultadosPorBusquedaComponent
      },
      {
        path: 'productor',
        component: ProductorShowComponent
      },
    ]
  },
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'search-actividad/:idactividad',
        component: ResultadosPorActividadesComponent
      },
      {
        path: 'search-canton/:idcanton',
        component: ResultadosPorCantonesComponent
      },
      {
        path: 'search/:nombre',
        component: ResultadosPorBusquedaComponent
      },
      {
        path: 'productor/:idproductor',
        component: ProductorShowComponent
      },
    ]
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
