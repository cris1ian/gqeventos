import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ClienteAdminComponent } from './pages/cliente-admin/cliente-admin.component';
import { GaleriasAdminComponent } from './pages/galerias-admin/galerias-admin.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CarouselConfigComponent } from './pages/carousel-config/carousel-config.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'cliente-admin/:id', component: ClienteAdminComponent },
  { path: 'galerias-admin', component: GaleriasAdminComponent },
  { path: 'carousel', component: CarouselConfigComponent }

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
