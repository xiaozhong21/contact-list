import React from "react";

import Container from "./Container/Container.js";

const ContactsList = ({
  contacts,
  editContact,
  deleteContact,
  setSelectedContact,
}) => {
  const [id, setId] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [notes, setNotes] = React.useState();
  const [funfact, setFunfact] = React.useState();

  const onSubmit = (e) => {
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
    editContact(
      {
        id,
        name,
        email,
        phone,
        notes,
        funfact,
      },
      id,
    );
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
          {contacts.map(({ id, name, email, phone, notes, funfact }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{notes}</td>
              <td>
                <Container
                  {...{
                    id,
                    name,
                    email,
                    phone,
                    notes,
                    funfact,
                    setId,
                    setName,
                    setEmail,
                    setPhone,
                    setNotes,
                    setFunfact,
                    onSubmit,
                  }}
                />
                <button onClick={() => setSelectedContact(id)}>Details</button>
                <button onClick={() => deleteContact(id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
