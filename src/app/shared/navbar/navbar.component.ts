import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  logout() {

  }

  isAdmin() {
    return false;
  }

}
