import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
}) => {
        const getTodayString = () => {
        const [month, day, year] = new Date()
        .toLocaleDateString("en-US")
        .split("/");
        return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContactChange = (e) => {
        let contact = {};
        contacts.forEach((item) => {
            if (item.name === e.target.value)
                contact = item;
        });
        setContact(contact.name);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Title" type="text" onChange={handleTitleChange} value={title} required />
            <input type="date" min={getTodayString()} onChange={handleDateChange} value={date} required />
            <input placeholder="Time" type="time" onChange={handleTimeChange} value={time} required />
            <ContactPicker contacts={contacts} setContact={setContact} handleContactChange={handleContactChange} value={contact} />
            <button type="submit">Add</button>
        </form>
    );
};
