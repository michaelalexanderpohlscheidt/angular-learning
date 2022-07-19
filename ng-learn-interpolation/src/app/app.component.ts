import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num: number = 3;
  name: string = 'Bob';
  randomNum: number = 0;

  constructor() {
    setInterval(() => {
      this.randomNum = Math.random();
    }, 500);
  }
}
