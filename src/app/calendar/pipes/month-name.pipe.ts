import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';


@Pipe({
  name: 'monthName'
})
export class MonthNamePipe implements PipeTransform {

  transform(monthNumber: number): string {
    debugger

    const monthName = moment(monthNumber).format('MMMM');

    return monthName;
  }
}
