import { action, makeAutoObservable } from "mobx";
import { Calendar } from "./interfaces/Calendar";

/**
 * @param calender The current value of the store
 * @param day the day the reminder was set
 * @returns a new copy of the calendar store without a reminder on the date passed
 */
const removeReminder = (calendar: Calendar[], day: number): Calendar[] => {
  const reducedCalendar = calendar.map((date) => {
    if (date.day === day) {
      return { day: day };
    }
    return date;
  });
  return (calendar = reducedCalendar);
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

const editReminder = (reminder: Calendar, calendar: Calendar[]): Calendar[] => {
  let editedCalender = calendar.map((date) => {
    if (reminder.day === date.day) {
      return { ...reminder };
    }
    return date;
  });

  return (calendar = editedCalender);
};

/**
 * @param calendar The current value of the store
 * @returns An updated state of the store
 */
const addReminder = (reminder: Calendar, calender: Calendar[]): Calendar[] => {
  const updatedCalendar = calender.map((date) => {
    if (date.day === reminder.day) {
      return { ...reminder };
    }
    return date;
  });

  return (calender = updatedCalendar);
};

export class Store {
  calender: Calendar[] = [];
  dates: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  removeReminder(day: number) {
    this.calender = removeReminder(this.calender, day);
  }

  createReminder(reminder: Calendar) {
    this.calender = addReminder(reminder, this.calender);
  }

  addDaysOfTheMonth(dates: number) {
    this.calender = addDays(this.calender, dates);
    this.dates = 0;
  }

  editReminder(reminder: Calendar) {
    this.calender = editReminder(reminder, this.calender);
  }

  @action
  reset() {
    this.calender = [];
  }
}

const store = new Store();
export default store;
