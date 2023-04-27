import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortadaComponent } from './components/portada/portada.component';
import { SitiowebComponent } from './components/sitioweb/sitioweb.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { AppsComponent } from './components/apps/apps.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavbarComponent,
    FooterComponent,
    SitiowebComponent,
    InformacionComponent,
    PortadaComponent,
    EcommerceComponent,
    AppsComponent,
    ServiciosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
