import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  constructor() { }

  getExamples() {
    return [
      'example1',
      'example2',
      'example3'
    ]
  }
}
