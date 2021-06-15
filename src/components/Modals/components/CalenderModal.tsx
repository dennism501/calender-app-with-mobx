import React from 'react';
import { Button, Modal, TextField } from '@material-ui/core';
import { observer } from 'mobx-react';
import { ModalContent, ModalHeader, ModalForm, ButtonHolder } from './Components';

interface Props {
    isOpen: boolean
    handleOpen: () => void
    setReminderText: (reminder: string) => void
    setReminderDate: (date: string) => void
    saveReminder: () => void
}

const CalendarModal: React.FunctionComponent<Props> = ({ isOpen, handleOpen, setReminderText, setReminderDate, saveReminder }) => {

    return (
        <>
            <Modal open={isOpen} onClose={handleOpen}>
                <ModalContent>
                    <ModalForm>
                        <ModalHeader>Set Reminder</ModalHeader>
                        <TextField inputProps={{ maxLength: 30 }} variant="outlined"
                            style={{ margin: 10 }} label="Reminder"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReminderText(e.target.value)}
                        >
                        </TextField>
                        <TextField type="datetime-local" id="date" variant="outlined" InputLabelProps={{
                            shrink: true,
                        }} style={{ margin: 10 }} label="Date"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReminderDate(e.target.value)}
                        >
                        </TextField>
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

