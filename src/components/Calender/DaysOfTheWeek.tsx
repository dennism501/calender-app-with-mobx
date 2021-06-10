import React from 'react';
import { CalendarHeader, WeekdayContainer, WeekDayNameBox } from './Components';

interface Days {
    weekDays: string[];
}

const DaysOfTheWeek: React.FunctionComponent<Days> = ({ weekDays }) => {
    return (

        <CalendarHeader>
            <WeekdayContainer>
                {weekDays.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </WeekdayContainer>
        </CalendarHeader>

    );
}

export default DaysOfTheWeek;
