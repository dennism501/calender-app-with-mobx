import { makeAutoObservable } from "mobx";
import { Calendar, Reminder } from "./interfaces/Calendar";

//TODO: Add a context provider
//TODO: Add CRUD functions for the calender

/**
 * @param calender The current value of the store
 * @param day the day the reminder was set
 * @returns a new copy of the calendar store without the date passed
 */
const removeReminder = (calender: Calendar[], day: number): Calendar[] => {
  return calender.filter((date) => date.day !== day);
};

/**
 * @param calendar The current value of the store
 * @param dates the number of days in the current month e.g {28 || 29 || 30 || 31 }
 * @returns a new calendar store with the current days of the month
 */
const addDays = (calendar: Calendar[], dates: number): Calendar[] => {
  for (let index = 1; index <= dates; index++) {
    calendar.push({ day: index });
  }
  return calendar;
};

const addReminder = (
  calendar: Calendar[],
  date: number,
  reminder: Reminder
): Calendar[] => {
  return calendar.splice(date + 1, 0, { day: date, reminder: reminder });
};

export class Store {
  calender: Calendar[] = [];
  newReminder: Reminder = {};
  dates: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  removeReminder(day: number) {
    this.calender = removeReminder(this.calender, day);
  }

  createReminder(day: number, reminder: Reminder) {
    this.calender = addReminder(this.calender, day, reminder);
  }

  addDaysOfTheMonth(dates: number) {
    this.calender = addDays(this.calender, dates);
    this.dates = 0;
  }
}

const store = new Store();
export default store;
