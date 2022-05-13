import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptarComponent } from './pages/adoptar/adoptar.component';
import { PublicarComponent } from './pages/publicar/publicar.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AdoptarComponent,
    PublicarComponent,
    HomeComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UsuariosModule,
    FormsModule,
    SharedModule
  ]
})
export class MascotasModule { }
