import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { Day } from '../../model/day.model';


@Component({
  selector: 'rn-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
  monthName: string = '';
  days: any[] = [];
  month: number;
  daysInMonth: number;

  constructor() { }

  ngOnInit(): void {
    this.month = new Date().getMonth();
    this.monthName = moment().format('MMMM');
    this.daysInMonth = this.getDaysInMonth(10, 2020);
    this.generateCalendarDays();

  }

  getDaysInMonth(month: number, year: number) {
    const days = new Date(year, month + 1, 0);
    return days.getDate();
  }

  private generateCalendarDays(): void {
    // we reset our calendar every time
    this.days = [];

    // we set the date
    let day: Date = new Date();

    // here we find the first day that our calendar will start from
    // it would be the last Monday of the previous month
    let startingDateOfCalendar = this.getStartDateForCalendar(day);

    // dateToAdd is an intermediate variable that will get increased
    // in the following for loop
    let dateToAdd = startingDateOfCalendar;

    // ok since we have our starting date then we get the next 41 days
    // that we need to add in our calendar array
    // 41 cause our calendar will show 6 weeks and MATH say that
    // 6 weeks * 7 days = 42!!
    for (var i = 0; i < 42; i++) {
      this.days.push(new Day(new Date(dateToAdd)));
      dateToAdd = new Date(dateToAdd.setDate(dateToAdd.getDate() + 1));
    }
  }

  private getStartDateForCalendar(selectedDate: Date){
    // for the day we selected let's get the previous month last day
    let lastDayOfPreviousMonth = new Date(selectedDate.setDate(0));

    // start by setting the starting date of the calendar same as the last day of previous month
    let startingDateOfCalendar: Date = lastDayOfPreviousMonth;

    // but since we actually want to find the last Monday of previous month
    // we will start going back in days intil we encounter our last Monday of previous month
    if (startingDateOfCalendar.getDay() != 1) {
      do {
        startingDateOfCalendar = new Date(startingDateOfCalendar.setDate(startingDateOfCalendar.getDate() - 1));
      } while (startingDateOfCalendar.getDay() != 1);
    }

    return startingDateOfCalendar;
  }

}
