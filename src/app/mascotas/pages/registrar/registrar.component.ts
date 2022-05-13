import { Component, OnInit } from '@angular/core';
import { Caracteristica } from '../../interfaces/caracteristica';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: [
  ]
})
export class RegistrarComponent implements OnInit {

  step: number = 1;

  caracteristicas: Caracteristica[] = [
    {
    descripcion: 'Carácter',
    valoresPosibles: [{ valor: 'Bueno', valorId: 2 }, { valor: 'Malo', valorId: 3 }, { valor: 'Diabólico', valorId: 4 } ]
    },
    {
      descripcion: 'Libre',
      respuesta: '',
    },
    {
      descripcion: 'Booleana',
      valoresPosibles: [{ valor: 'Sí', valorId: 3 }, {valor: 'No', valorId: 5 }]
    }

];

  constructor() { }

  ngOnInit(): void {
  }

  nextStep() {
    if (this.step == 2) {
      //submit
      return;
    }
    this.step++;
  }

  previusStep() {
    this.step--;
  }

}
