import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayComponent } from './components/day/day.component';
import { MonthComponent } from './components/month/month.component';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [DayComponent, MonthComponent, CalendarComponent],
  imports: [
    CommonModule
  ]
})
export class CalendarModule { }
