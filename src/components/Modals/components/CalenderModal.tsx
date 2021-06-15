import React, { useContext } from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import {
    ModalContent,
    ModalHeader,
    ModalForm,
    ButtonHolder,
    ReminderHolder,
    ReminderText,
    ColorPicker,
    ColorPickerHeader
} from './Components';

import { CalendarContext } from '../../MobxProvider/Provider'
import { CalenderMarker } from '../../Calender/Components';


interface Props {
    isOpen: boolean
    handleOpen: () => void
    setReminderText: (reminder: string) => void
    setReminderDate: (date: string) => void
    saveReminder: () => void
    setMarkerColor: (color: string) => void
    date: number
}

const CalendarModal: React.FunctionComponent<Props> = ({
    isOpen,
    handleOpen,
    setReminderText,
    setReminderDate,
    saveReminder,
    setMarkerColor,
    date }) => {

    const markerColors = ["#06ad83", "#5d7bdd", "#5d7bdd", "#8067e5", "#e4e9f0"]
    const store = useContext(CalendarContext)

    return (
        <>
            <Modal open={isOpen} onClose={handleOpen}>
                <ModalContent>
                    <ModalHeader>Set Reminder</ModalHeader>
                    <ReminderHolder>
                        {
                            store.calender?.map((reminder, index) => (
                                reminder.day === date ?
                                    (reminder.reminder && <ReminderText key={index}>{`${reminder.reminder.text}-${reminder.reminder?.date}`}</ReminderText>) : ""
                            ))
                        }
                    </ReminderHolder>
                    <ModalForm>

                        <TextField inputProps={{ maxLength: 30 }} variant="outlined"
                            style={{ margin: 10 }} label="Reminder"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReminderText(e.target.value)}
                        >
                        </TextField>
                        <TextField type="datetime-local" id="datetime-local" variant="outlined" InputLabelProps={{
                            shrink: true,
                        }} style={{ margin: 10 }} label="Date"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReminderDate(e.target.value)}
                        >
                        </TextField>

                        <ColorPickerHeader>Select Color for reminder</ColorPickerHeader>
                        <ColorPicker>
                            {
                                markerColors.map((color, index) => (
                                    <CalenderMarker key={index} onClick={() => setMarkerColor(color)} color={color} />
                                ))

                            }

                        </ColorPicker>
                        <ButtonHolder>
                            <Button variant="contained" color="primary" onClick={saveReminder}> Set</Button>
                            <Button variant="contained" onClick={handleOpen}>Cancel</Button>
                        </ButtonHolder>
                    </ModalForm>
                </ModalContent>
            </Modal>
        </>
    );
}

export default observer(CalendarModal);

