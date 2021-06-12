import React from 'react';
import { MainLayout } from '../components/MainLayout/Components';
import { CalendarHeader } from '../components/Calender/Components'
import DaysOfTheWeek from '../components/Calender/DaysOfTheWeek';
import DaysOfTheMonth from '../components/Calender/DaysOfTheMonth';
import { getDateOfCurrentMonth } from '../utils/utils';
import { useCalendarStore } from '../components/MobxProvider/Provider';
import { observer } from 'mobx-react';

const Home: React.FunctionComponent = () => {

    //sets the number of days in current month to the calendar store when the first page is rendered
    useCalendarStore().addDaysOfTheMonth(getDateOfCurrentMonth())

    const names: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return (
        <MainLayout>
            <CalendarHeader>
                <DaysOfTheWeek weekDays={names} />
            </CalendarHeader>
            <DaysOfTheMonth />
        </MainLayout>
    );
}

export default observer(Home);
