import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-field',
  templateUrl: './login-field.component.html',
  styleUrls: ['./login-field.component.scss']
})
export class LoginFieldComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

}
