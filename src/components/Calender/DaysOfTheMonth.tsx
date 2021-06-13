import { observer } from 'mobx-react';
import React from 'react';
import { Calendar, Reminder } from '../../store/interfaces/Calendar';
import { useCalendarStore } from '../MobxProvider/Provider';
import { CalendarBody, CalenderDay, CalenderMarker } from './Components';

const DaysOfTheMonth: React.FunctionComponent = () => {

    let days: Calendar[] = useCalendarStore().calender
    // let reminder: Reminder = { text: "Hell0", date: new Date().toString() }

    // useCalendarStore().createReminder(1, reminder)
    return (
        <CalendarBody>
            {days.map((day, index) => (
                <CalenderDay onClick={() => console.log("Nothing")} key={index}>
                    {day.day}

                </CalenderDay>
            ))}
        </CalendarBody>

    );
}

export default observer(DaysOfTheMonth);
