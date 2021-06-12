import React from 'react';
import { MainLayout } from '../components/MainLayout/Components';
import { CalendarHeader } from '../components/Calender/Components'
import DaysOfTheWeek from '../components/Calender/DaysOfTheWeek';
import DaysOfTheMonth from '../components/Calender/DaysOfTheMonth';

const Home: React.FunctionComponent = () => {

    const names: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const days: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",]

    return (

        <MainLayout>
            <CalendarHeader>
                <DaysOfTheWeek weekDays={names} />
            </CalendarHeader>
            <DaysOfTheMonth days={days} />

        </MainLayout>
    );
}

export default Home;
