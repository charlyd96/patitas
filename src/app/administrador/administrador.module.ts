import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { CrearComponent } from './pages/crear/crear.component';



@NgModule({
  declarations: [
    CaracteristicasComponent,
    CrearComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministradorModule { }
