export interface Calendar {
  day: number;
  reminder?: Reminder;
}

export interface Reminder {
  text?: string;
  date?: string;
  color?: string;
}
