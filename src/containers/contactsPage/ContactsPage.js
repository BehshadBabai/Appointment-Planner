import React, {useState} from "react";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        /*
        Add contact info and clear data
        if the contact name is not a duplicate
        */
        if (!props.contacts.some((contact) => contact.name === name)) {
            props.addContacts(name, phone, email);
            setName('');
            setPhone('');
            setEmail('');
        }
        else {
            alert(`Contact couldn't be added because a contact with the name "${name}" already exists in contacts`);
            setName('');
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
                <ContactForm handleSubmit={handleSubmit} name={name} phone={phone} email={email} setName={setName} setPhone={setPhone} setEmail={setEmail} />
            </section>
            <hr />
            <section>
                <h2>Contacts</h2>
                <TileList list={props.contacts} />
            </section>
        </div>
    );
};
