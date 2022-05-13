import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styles: [
  ]
})
export class PublicarComponent implements OnInit {

  tipoPublicacion: string = 'sinChapita'
  step: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  nexStep() {
    if (this.step == 2) {
      //submit
      return;
    }
    this.step++;
  }

  previusStep() {
    this.step--;
  }

  tituloFormulario(): string {
    return this.step == 1 ? 'Datos del resctatista' : 'Datos de la mascota';
  }

}
