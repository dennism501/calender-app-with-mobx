import { observer } from 'mobx-react';
import React from 'react';
import { Calendar } from '../../store/interfaces/Calendar';
import { useCalendarStore } from '../MobxProvider/Provider';
import { CalendarBody, CalenderDay, CalenderMarker } from './Components';

const DaysOfTheMonth: React.FunctionComponent = () => {

    let days: Calendar[] = useCalendarStore().calender

    return (
        <CalendarBody>
            {days.map((day, index) => (
                <CalenderDay onClick={() => console.log(day)} key={index}>
                    {day.day}

                    {day.reminder && <CalenderMarker />}

                </CalenderDay>
            ))}
        </CalendarBody>

    );
}

export default observer(DaysOfTheMonth);
