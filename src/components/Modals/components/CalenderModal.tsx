import React, { useContext } from 'react';
import { Button, IconButton, Modal, TextField } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { observer } from 'mobx-react';
import {
    ModalContent,
    ModalHeader,
    ModalForm,
    ButtonHolder,
    ReminderHolder,
    ReminderText,
    ColorPicker,
    ColorPickerHeader,
    ControlsHolder
} from './Components';

import { CalendarContext } from '../../MobxProvider/Provider'
import { CalenderMarker } from '../../Calender/Components';
import { Calendar } from '../../../store/interfaces/Calendar';


interface Props {
    isOpen: boolean
    reminderDate: string
    reminderText: string
    isEditable: boolean
    errorText: boolean
    date: number
    handleOpen: () => void
    setReminderText: (reminder: string) => void
    setReminderDate: (date: string) => void
    saveReminder: () => void
    setMarkerColor: (color: string) => void
    deleteReminder: (day: number) => void
    editReminder: (reminder: Calendar) => void

}

const CalendarModal: React.FunctionComponent<Props> = ({
    isOpen,
    handleOpen,
    setReminderText,
    setReminderDate,
    saveReminder,
    setMarkerColor,
    deleteReminder,
    editReminder,
    reminderDate,
    isEditable,
    errorText,
    reminderText,
    date }) => {

    const markerColors = ["#06ad83", "#5d7bdd", "#5d7bdd", "#8067e5"]
    const store = useContext(CalendarContext)

    return (
        <>
            <Modal style={{ top: "25%", left: "30%", width: "100%" }} open={isOpen} onClose={handleOpen}>
                <ModalContent>
                    <ModalHeader>Set Reminder</ModalHeader>
                    <ReminderHolder>
                        {
                            store.calender?.map((reminder, index) => (
                                reminder.day === date ?
                                    (reminder.reminder && <React.Fragment key={index}>
                                        <ReminderText >{`${reminder.reminder?.text}-${reminder.reminder?.date}`}</ReminderText>
                                        <ControlsHolder >
                                            <IconButton onClick={() => editReminder(reminder)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => deleteReminder(reminder.day)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </ControlsHolder>
                                    </React.Fragment>) : ""
                            ))
                        }
                    </ReminderHolder>
                    <ModalForm>

                        <TextField required inputProps={{ maxLength: 30 }} value={
                            reminderText} variant="outlined"
                            style={{ margin: 10 }} label="Reminder"
                            error={errorText}
                            helperText={errorText ? "Please enter reminder" : ""}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReminderText(e.target.value)}
                        >
                        </TextField>
                        <TextField error={errorText}
                            helperText={errorText ? "Please select the date" : ""} required value={reminderDate} type="datetime-local" id="datetime-local" variant="outlined" InputLabelProps={{
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
                        {errorText && <span style={{ marginLeft: 10, color: "red" }}>Select color</span>}
                        <ButtonHolder>
                            <Button variant="contained" color="primary" onClick={saveReminder}>{isEditable ? "Edit" : "Set"}</Button>
                            <Button variant="contained" onClick={handleOpen}>Close</Button>
                        </ButtonHolder>
                    </ModalForm>
                </ModalContent>
            </Modal>
        </>
    );
}

export default observer(CalendarModal);

