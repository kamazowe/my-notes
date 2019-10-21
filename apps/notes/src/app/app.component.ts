import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  testApiMessage$: Observable<any>;

  constructor(private http:HttpClient){
  }


  ngOnInit(){
    this.testApiMessage$ = this.http.get('/api/hello')
  }

  title = 'my-notes';
}
