import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState} from "react";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
    /*
    Define state variables for 
    contacts and appointments 
    */
    const [contacts,setContacts] = useState([]);
    const [appointments,setAppointments] = useState([]);

    const addContacts = (name, phoneNumber, email) => {
        const contact = { name: name, phoneNumber: phoneNumber, email: email };
        setContacts((prev) => [contact,...prev]);
    }

    const addAppointments = (title, contact, date, time) => {
        const appointment = { title: title, contact: contact, date: date, time: time };
        setAppointments((prev) => [appointment,...prev]);
    }
      
    
    const ROUTES = {
        CONTACTS: "/contacts",
        APPOINTMENTS: "/appointments",
    };
  

    return (
      <>
        <nav>
            <NavLink to={ROUTES.CONTACTS} activeClassName="active">
                Contacts
            </NavLink>
            <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
                Appointments
            </NavLink>
        </nav>
        <main>
            <Switch>
                <Route exact path="/">
                    <Redirect to={ROUTES.CONTACTS} />
                </Route>
                <Route path={ROUTES.CONTACTS}>
                    {/* Add props to ContactsPage */}
                    <ContactsPage contacts={contacts} addContacts={addContacts} />
                </Route>
                <Route path={ROUTES.APPOINTMENTS}>
                    {/* Add props to AppointmentsPage */}
                    <AppointmentsPage contacts={contacts} appointments={appointments} addAppointments={addAppointments} />
                </Route>
            </Switch>
        </main>
      </>
    );
}

export default App;
