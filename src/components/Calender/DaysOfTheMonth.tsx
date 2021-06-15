import { observer } from 'mobx-react';
import React from 'react';
import { Calendar } from '../../store/interfaces/Calendar';
import { useCalendarStore } from '../MobxProvider/Provider';
import { CalendarBody, CalenderDay, CalenderMarker } from './Components';

interface Props {
    handleOpenModal: () => void
}
const DaysOfTheMonth: React.FunctionComponent<Props> = ({ handleOpenModal }) => {

    let days: Calendar[] = useCalendarStore().calender

    return (
        <CalendarBody>
            {days.map((day, index) => (
                <CalenderDay onClick={handleOpenModal} key={index}>
                    {day.day}

                    {day.reminder && <CalenderMarker />}

                </CalenderDay>
            ))}
        </CalendarBody>

    );
}

export default observer(DaysOfTheMonth);
