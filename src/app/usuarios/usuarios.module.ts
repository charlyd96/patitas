import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';



@NgModule({
  declarations: [
    RegistroComponent,
    DatosPersonalesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DatosPersonalesComponent
  ]
})
export class UsuariosModule { }
