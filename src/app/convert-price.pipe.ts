import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPrice',
  standalone: false
})
export class ConvertPricePipe implements PipeTransform {

  transform(value: number, currency: string): string {
    switch(currency){
      case 'USD':
        return (value / 2.9).toFixed(2) + ' USD';
      case 'EUR':
        return (value / 3.4).toFixed(2) + ' EUR';
      case 'GBP':
        return (value / 4).toFixed(2) + ' GBP';
      default:
        return value.toFixed(2) + ' TND';
    }
  }

}
