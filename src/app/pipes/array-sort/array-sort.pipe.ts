import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySort',
  pure: false
})
export class ArraySortPipe implements PipeTransform {

  transform(arr: any[], property: string, descending: boolean = false): any {
    const direction = (descending) ? -1 : 1;
    return arr.map(item => item).sort((a, b) => {
      if (a[property] < b[property]) { return -1 * direction; }
      if (a[property] > b[property]) { return 1 * direction; }
      return 0;
    });
  }

}
