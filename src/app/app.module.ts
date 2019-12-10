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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselConfigComponent } from './pages/carousel-config/carousel-config.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { NgxImageCompressService } from 'ngx-image-compress';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ImageCompressService, ResizeOptions } from 'ng2-image-compress';
import { CompressionTestComponent } from './pages/compression-test/compression-test.component';


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
    CarouselConfigComponent,
    CompressionTestComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    NgbModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSlideToggleModule
  ],
  providers: [
    NgxImageCompressService,
    ImageCompressService,
    ResizeOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
