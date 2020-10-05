import { Reminder } from 'src/app/reminder/reminder.model';

export class Day {
  public date: Date;
  public title?: string;
  public isPastDate: boolean;
  public isToday: boolean;
  public reminders?: Reminder[];

  constructor(d: Date) {
    this.date = d;
    this.isPastDate = d.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0);
    this.isToday = d.setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0);
  }

}
