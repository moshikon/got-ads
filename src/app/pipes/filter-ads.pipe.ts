import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterAds',
  pure: false
})

export class FilterAdsPipe implements PipeTransform {
  transform(items, filterStart, filterEnd): any {
    return items.filter(item => {
      const afterStart = filterStart ? item.date >= parseFloat(filterStart) : true;
      const beforeEnd = filterEnd ? item.date < parseFloat(filterEnd) : true;
      return (afterStart && beforeEnd);
    });
  }
}
