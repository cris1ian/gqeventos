import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CombosComponent } from './pages/combos/combos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { GaleriasAdminComponent } from './pages/galerias-admin/galerias-admin.component';
import { ClienteAdminComponent } from './pages/cliente-admin/cliente-admin.component';
import { LandingComponent } from './pages/landing/landing.component';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleriaComponent,
    NosotrosComponent,
    CombosComponent,
    ProductosComponent,
    ContactanosComponent,
    ClienteComponent,
    GaleriasAdminComponent,
    ClienteAdminComponent,
    LandingComponent,

  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
