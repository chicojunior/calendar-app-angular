import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChunkPipe } from './pipes/chunk.pipe';
import { MonthNamePipe } from './pipes/month-name.pipe';

import { DayComponent } from './components/day/day.component';
import { MonthComponent } from './components/month/month.component';
import { CalendarComponent } from './components/calendar/calendar.component';



@NgModule({
  declarations: [
    DayComponent,
    MonthComponent,
    CalendarComponent,
    ChunkPipe,
    MonthNamePipe
  ],
  imports: [
  CommonModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
