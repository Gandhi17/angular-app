import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h3>{{name}}</h3>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  name = 'gandhi';
}
