import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { HospitalNuevoComponent } from './hospital-nuevo/hospital-nuevo.component';

const routes: Routes = [
  {path: 'componente1', component: Componente1Component},
  {path: 'componente2', component: Componente2Component},
  {path: 'hospitales', component: HospitalesComponent},
  {path: 'agregar_hospital', component: HospitalNuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
