import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // fixme greegor jezeli to typ prosty i przypisujemy inicjalnie wartosc to nie potrzebne typowanie
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

}
