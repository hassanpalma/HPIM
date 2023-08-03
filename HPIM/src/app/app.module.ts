import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { QuienComponent } from './componentes/quien/quien.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuComponent,
    PiePaginaComponent,
    InicioComponent,
    ServiciosComponent,
    QuienComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
