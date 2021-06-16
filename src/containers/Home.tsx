import React, { useContext, useEffect, useState } from 'react';
import { MainLayout, MonthButtonHolder } from '../components/MainLayout/Components';
import { CalendarHeader } from '../components/Calender/Components'
import DaysOfTheWeek from '../components/Calender/DaysOfTheWeek';
import DaysOfTheMonth from '../components/Calender/DaysOfTheMonth';
import { getDateOfCurrentMonth, getNextMonth, getPreviousMonth } from '../utils/utils';
import { useCalendarStore } from '../components/MobxProvider/Provider';
import { observer } from 'mobx-react';
import CalendarModal from '../components/Modals/components/CalenderModal';
import { Calendar } from '../store/interfaces/Calendar';
import { CalendarContext } from '../components/MobxProvider/Provider'
import { Button } from '@material-ui/core';


const Home: React.FunctionComponent = () => {
    getNextMonth()
    const store = useContext(CalendarContext)
    let days: Calendar[] = useCalendarStore().calender
    const names: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const [reminderText, setReminderText] = useState<string>("")
    const [dateReminder, setDateReminder] = useState<string>("")
    const [markerColor, setMarkerColor] = useState<string>("")
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [day, setDay] = useState<number>(0)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<boolean>(false)

    //sets the number of days in current month to the calendar store when the first page is rendered
    useEffect(() => {
        store.addDaysOfTheMonth(getDateOfCurrentMonth())
    }, [store])

    function handleOpenModal(date: number) {
        setDay(date)
        setOpenModal(!openModal)
    }

    function handlePreviousMonth() {
        store.calender = []
        store.addDaysOfTheMonth(getPreviousMonth())
    }
    function handleNextMonth() {
        store.calender = []
        store.addDaysOfTheMonth(getNextMonth())
    }

    function handleSaveReminder() {

        if (reminderText !== "" && dateReminder !== "" && markerColor !== "") {
            let reminder: Calendar = { day: day, reminder: { text: reminderText, date: dateReminder, color: markerColor } }
            store.createReminder(reminder)
            setReminderText("")
            setDateReminder("")
            if (isEditable) {
                setIsEditable(false)
            }
        } else {
            setErrorText(true)
        }

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

    function handleSetMarkerColor(color: string) {
        setMarkerColor(color)
    }

    function handleDeleteReminder(date: number) {
        store.removeReminder(date)
    }

    function handleEditReminder(reminder: Calendar) {
        setIsEditable(true)
        setReminderText(reminder?.reminder?.text || "")
        setDateReminder(reminder?.reminder?.date || "")
        setMarkerColor(reminder?.reminder?.color! || "")


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
                    setMarkerColor={handleSetMarkerColor}
                    deleteReminder={handleDeleteReminder}
                    editReminder={handleEditReminder}
                    reminderText={reminderText}
                    reminderDate={dateReminder}
                    errorText={errorText}
                    isEditable={isEditable}
                    date={day}
                />
                <CalendarHeader>
                    <DaysOfTheWeek weekDays={names} />
                </CalendarHeader>
                <DaysOfTheMonth handleOpenModal={handleOpenModal} calendarDates={days} />
            </MainLayout>

            <MonthButtonHolder>
                <Button onClick={handlePreviousMonth} variant="contained">Previous Month</Button>
                <Button onClick={handleNextMonth} variant="contained">Next month </Button>
            </MonthButtonHolder>

        </>
    );
}

export default observer(Home);
