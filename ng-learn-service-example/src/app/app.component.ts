import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  examples: string[] = [];

  constructor(private _exampleService: ExampleService) {}

  ngOnInit() {
    this.examples = this._exampleService.getExamples();
  }
}
