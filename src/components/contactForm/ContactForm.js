import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={handleNameChange} />
            <input type="tel" placeholder="Phone Number" pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$" value={phone} onChange={handlePhoneChange} />
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <button type="submit">Add</button>
        </form>
  );
};
