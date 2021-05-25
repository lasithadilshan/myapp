import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  userObject = {
    name: 'John',
    age: '32',
    id: 0
  }


  constructor(private httpService: HttpService) {}


  handleEvent() {
    this.httpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe((response) => {
      console.log('hello')
    });
  }
}
