import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: false
})
export class ConvertPipe implements PipeTransform {

  transform(value: number , currency :string): number {
    switch(currency){
      case 'USD':
        return value / 3.4;
      case 'EUR':
        return value / 2.9;
      case 'TND':
        return value;
      case 'GBP':
        return value / 4.2;
      default:
        return 0;
    }
  }

}
