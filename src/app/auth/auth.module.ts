import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    RouterModule
  ]
})
export class AuthModule { }
