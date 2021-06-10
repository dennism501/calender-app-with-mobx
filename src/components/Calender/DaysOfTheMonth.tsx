import React from 'react';
import { CalendarBody, CalenderDay } from './Components';

interface CalendarDays {
    days: string[]
}


const DaysOfTheMonth: React.FunctionComponent<CalendarDays> = ({ days }) => {
    return (
        <CalendarBody>
            {days.map((day, index) => (
                <CalenderDay key={index}>{day}</CalenderDay>
            ))}
        </CalendarBody>
    );
}

export default DaysOfTheMonth;
