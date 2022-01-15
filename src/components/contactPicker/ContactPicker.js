import React from "react";

export const ContactPicker = (props) => {
    return (
        <select onChange={props.handleContactChange} value={props.value}>
            <option key="descriptor" value="">Please Select an Already Added Contact</option>
            {props.contacts.map((contact) => {
                return <option value={contact.name} key={contact.name}>{contact.name}</option>
            })}
        </select>
    );
};
