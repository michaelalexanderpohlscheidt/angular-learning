import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {
  transform(rating: number, symbol: string = '⭐', maxRating: number = 5): string {
    if(rating > maxRating) {
      return 'ERR: Rating is above max rating value!';
    }

    return `[${symbol.repeat(rating)}${('x').repeat(maxRating-rating)}] (${rating} of ${maxRating})`;
  }
}
