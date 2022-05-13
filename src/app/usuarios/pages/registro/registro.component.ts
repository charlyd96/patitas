import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  step: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  nexStep() {
    this.step++;
  }

  previusStep() {
    this.step--;
  }
}
