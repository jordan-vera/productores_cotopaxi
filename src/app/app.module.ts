import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

import { AdministradorService } from './servicios/administrador.service';
import { ActividadesService } from './servicios/actividades.service';
import { CantonService } from './servicios/canton.service';
import { ContactoService } from './servicios/contacto.service';
import { ProductoresService } from './servicios/productores.service';

import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { ActividadesComponent } from './panel-admin/actividades/actividades.component';
import { AgregarProductoresComponent } from './panel-admin/agregar-productores/agregar-productores.component';
import { ConsultarProductoresComponent } from './panel-admin/consultar-productores/consultar-productores.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
import {NgxPrintModule} from 'ngx-print';
import { PerfilComponent } from './panel-admin/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    PanelAdminComponent,
    ActividadesComponent,
    AgregarProductoresComponent,
    ConsultarProductoresComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GoogleMapsModule,
    Ng2SearchPipeModule,
    NgxPrintModule
  ],
  providers: [
    AdministradorService,
    ActividadesService,
    CantonService,
    ContactoService,
    ProductoresService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
