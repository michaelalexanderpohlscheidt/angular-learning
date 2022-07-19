import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgUrl: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png';
  imgWidth: number = 100;
  imgHeight: number = 100;

  constructor() {
    setInterval(() => {
      this.imgWidth = 100 + (700 * Math.random());
      this.imgHeight = 100 + (700 * Math.random())
    }, 3000);
  }
}
