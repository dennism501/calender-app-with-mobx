import React, { createContext, useContext } from "react";
import store, { Store } from "../../store/store"

const initialState = new Store()

const CalendarContext = createContext<Store>(initialState);

export const CalendarStoreProvider: React.FC = ({ children }) => {
  return <CalendarContext.Provider value={store}>{children} </CalendarContext.Provider>
}


/**
 * 
 * @returns The context that holds the calendar store instance 
 * - import this as opposed to calling the useContext hook in ever component
 */
export const useCalendarStore = () => useContext(CalendarContext)