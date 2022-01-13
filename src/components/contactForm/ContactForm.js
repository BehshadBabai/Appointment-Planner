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
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" />
            <input placeholder="Phone Number" pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"/>
            <input placeholder="Email" />
            <button type="submit">Add</button>
        </form>
  );
};
