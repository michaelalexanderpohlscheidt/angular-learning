import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToSnakeCase'
})
export class CamelCaseToSnakeCasePipe implements PipeTransform {

  transform(value: string): string {
    let snakeCaseString: string = '';
    let currentCharCode: number;

    for(let char of value) {
      currentCharCode = char.charCodeAt(0);
      // In ASCII table char A-Z is between No. 65 to 90
      if(currentCharCode >= 65 && currentCharCode <= 90) {
        char = `_${char.toLowerCase()}`;
      }

      snakeCaseString += char.toLowerCase();
    }

    return snakeCaseString;
  }
}
