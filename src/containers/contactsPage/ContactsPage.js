import React, {useState,useEffect} from "react";
import { TileList } from "../../components/tileList/TileList.js";
import { ContactForm } from "../../components/contactForm/ContactForm.js";

export const ContactsPage = (props) => {
    /*
    Define state variables for 
    contact info and duplicate check
    */
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    if (props.contacts.includes(name)) {
        alert(`You won't be able to add this contact with ${name} as name since duplicate contacts are not allowed in this form!`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        if the contact name is not a duplicate
        */
        if (!props.contacts.includes(name)) {
            props.addContacts(name, phone, email);
            setName('');
            setPhone('');
            setEmail('');
        }
    };

    /*
    Using hooks, check for contact name in the 
    contacts array variable in props
    */
    
    return (
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm onSubmit={handleSubmit} name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList contacts={props.contacts} />
            </section>
        </div>
    );
};
