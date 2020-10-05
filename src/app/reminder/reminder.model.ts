export interface Reminder {
  id: number;
  day: number;
  description: string;
  city: City;
  time: string;
}

export interface City {
  name: string;
  forecast: string;
}
