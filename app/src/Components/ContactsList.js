import React from "react";

import Container from "./Container/Container.js";

const ContactsList = ({
  contacts,
  editContact,
  deleteContact,
  setSelectedContact,
}) => {
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const {
      id: { value: id },
      name: { value: name },
      email: { value: email },
      phone: { value: phone },
      notes: { value: notes },
      funfact: { value: funfact },
    } = form.elements;
    editContact({ id, name, email, phone, notes, funfact }, id);
    form.reset();
  };

  return (
    <div>
      <h2>List of Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Notes</th>
            <th>More Otions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.notes}</td>
              <td>
                <Container {...{ contact, handleEditFormSubmit }} />
                <button onClick={() => setSelectedContact(contact.id)}>
                  Details
                </button>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
