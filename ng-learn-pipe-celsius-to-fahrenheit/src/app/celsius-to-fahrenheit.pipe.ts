import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsiusToFahrenheit'
})
export class CelsiusToFahrenheitPipe implements PipeTransform {
  transform(celsius: number, decimalPlaces: number = 3): string {
    return `${((celsius * (9/5) ) + 32).toFixed(decimalPlaces)} °F`;
  }
}
