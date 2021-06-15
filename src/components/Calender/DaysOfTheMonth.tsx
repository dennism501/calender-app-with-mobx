import { observer } from 'mobx-react';
import React from 'react';
import { Calendar } from '../../store/interfaces/Calendar';
import { CalendarBody, CalenderDay, CalenderMarker } from './Components';

interface Props {
    handleOpenModal: (date: number) => void
    calendarDates: Calendar[]
}
const DaysOfTheMonth: React.FunctionComponent<Props> = ({ handleOpenModal, calendarDates }) => {
    return (
        <CalendarBody>
            {calendarDates.map((day, index) => (
                <CalenderDay onClick={() => handleOpenModal(day.day)} key={index}>
                    {day.day}
                    {day.reminder && <CalenderMarker color={day.reminder.color || "#5d7bdd"} />}
                </CalenderDay>
            ))}
        </CalendarBody>

    );
}

export default observer(DaysOfTheMonth);
