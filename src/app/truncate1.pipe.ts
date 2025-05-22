import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate1',
  standalone: false
})
export class Truncate1Pipe implements PipeTransform {

  transform(value: string , limit : number): unknown {
    return value.length > limit  ? value.slice(0,limit) + "..." : value;
  }

}
