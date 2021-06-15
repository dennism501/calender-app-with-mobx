import React, { useContext, useEffect, useState } from 'react';
import { MainLayout } from '../components/MainLayout/Components';
import { CalendarHeader } from '../components/Calender/Components'
import DaysOfTheWeek from '../components/Calender/DaysOfTheWeek';
import DaysOfTheMonth from '../components/Calender/DaysOfTheMonth';
import { getDateOfCurrentMonth } from '../utils/utils';
import { useCalendarStore } from '../components/MobxProvider/Provider';
import { observer } from 'mobx-react';
import CalendarModal from '../components/Modals/components/CalenderModal';
import { Calendar } from '../store/interfaces/Calendar';
import { CalendarContext } from '../components/MobxProvider/Provider'


const Home: React.FunctionComponent = () => {
    const store = useContext(CalendarContext)
    let days: Calendar[] = useCalendarStore().calender
    const names: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const [reminderText, setReminderText] = useState<string>("")
    const [dateReminder, setDateReminder] = useState<string>("")
    const [day, setDay] = useState<number>(0)
    const [openModal, setOpenModal] = useState<boolean>(false)

    //sets the number of days in current month to the calendar store when the first page is rendered
    useEffect(() => {
        store.addDaysOfTheMonth(getDateOfCurrentMonth())
    }, [store])

    function handleOpenModal(date: number) {
        setDay(date)
        setOpenModal(!openModal)
    }

    function handleSaveReminder() {
        let reminder: Calendar = { day: day, reminder: { text: reminderText, date: dateReminder } }
        store.createReminder(reminder)
    }

    function handleCloseModal() {
        setOpenModal(false)
    }

    function handleSetReminder(reminder: string) {
        setReminderText(reminder)
    }

    function handleSetDate(date: string) {
        setDateReminder(date)
    }


    return (
        <>
            <MainLayout>
                <CalendarModal
                    isOpen={openModal}
                    handleOpen={handleCloseModal}
                    setReminderText={handleSetReminder}
                    setReminderDate={handleSetDate}
                    saveReminder={handleSaveReminder}
                />
                <CalendarHeader>
                    <DaysOfTheWeek weekDays={names} />
                </CalendarHeader>
                <DaysOfTheMonth handleOpenModal={handleOpenModal} calendarDates={days} />
            </MainLayout>
        </>
    );
}

export default observer(Home);
