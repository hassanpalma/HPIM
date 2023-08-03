import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { QuienComponent } from './componentes/quien/quien.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'quien', component:QuienComponent},
  {path: 'contacto', component:ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
