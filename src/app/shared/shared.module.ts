import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    NavbarComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    NgbModule,
    FormsModule,
    NgxMaskModule
  ]
})
export class SharedModule { }
