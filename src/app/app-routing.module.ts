import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mascotas/pages/home/home.component';
import { RegistroComponent } from './usuarios/pages/registro/registro.component';
import { AdoptarComponent } from './mascotas/pages/adoptar/adoptar.component';
import { PublicarComponent } from './mascotas/pages/publicar/publicar.component';
import { RegistrarComponent } from './mascotas/pages/registrar/registrar.component';
import { CaracteristicasComponent } from './administrador/pages/caracteristicas/caracteristicas.component';
import { CrearComponent } from './administrador/pages/crear/crear.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adoptar', component: AdoptarComponent },
  { path: 'publicar', component: PublicarComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'caracteristicas', component: CaracteristicasComponent },
  { path: 'caracteristicas/crear', component: CrearComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
