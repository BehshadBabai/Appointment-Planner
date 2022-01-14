import React, {useState} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
    /*
    Define state variables for 
    appointment info
    */
    const [title, setTitle] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data  
        */
        if (contact!=='') {
            props.addAppointments(title, contact, date, time);
            setTitle('');
            setContact('');
            setDate('');
            setTime('');
        }
        else {
            alert('Please Select a contact from already added contacts to book an appointment!');
        }
    };

    return (
        <div>
            <section>
                <h2>Add Appointment</h2>
                <AppointmentForm contacts={props.contacts} title={title} contact={contact} date={date} time={time} setTitle={setTitle} setContact={setContact} setDate={setDate} setTime={setTime} handleSubmit={handleSubmit} />
            </section>
            <hr />
            <section>
                <h2>Appointments</h2>
                <TileList list={props.appointments} />
            </section>
        </div>
    );
};
