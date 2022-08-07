import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToSnakeCase'
})
export class CamelCaseToSnakeCasePipe implements PipeTransform {

  transform(camelCaseString: string): string {
    return camelCaseString.replace(/[A-Z]/g, (letter) => `_${letter}`).toLowerCase();
  }

}
