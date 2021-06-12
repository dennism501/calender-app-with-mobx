import React from 'react';
import { CalendarBody, CalenderDay, CalenderMarker } from './Components';

interface CalendarDays {
    days: string[]
}


const DaysOfTheMonth: React.FunctionComponent<CalendarDays> = ({ days }) => {
    return (
        <CalendarBody>
            {days.map((day, index) => (
                <CalenderDay onClick={() => (console.log(index))} key={index}>
                    {day}
                    <CalenderMarker />
                </CalenderDay>
            ))}

        </CalendarBody>
    );
}

export default DaysOfTheMonth;
