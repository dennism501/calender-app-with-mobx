import { makeAutoObservable } from "mobx";
import { Calender } from "./interfaces/Calendar";

//TODO: Add a context provider
//TODO: Add CRUD functions for the calender

export class Store {
  calender: Calender[] = [];
  newReminder: string = "";
  constructor() {
    makeAutoObservable(this);
  }
}

const store = new Store();
export default store;
