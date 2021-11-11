import React from "react";

const AddContact = ({ addContact }) => {
  const onSubmit = (e) => {
    const form = e.currentTarget;
    const {
      name: { value: name },
      email: { value: email },
      phone: { value: phone },
      notes: { value: notes },
      funfact: { value: funfact },
    } = form.elements;

    e.preventDefault();
    addContact({
      name,
      email,
      phone,
      notes,
      funfact,
    });
    form.reset();
  };

  return (
    <>
      <h2>Add a New Contact</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" required />
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" required />
        <label htmlFor="phone">Phone: </label>
        <input id="phone" name="phone" />
        <label htmlFor="notes">Notes: </label>
        <input id="notes" name="notes" />
        <label htmlFor="funfact">Funfact: </label>
        <input id="funfact" name="funfact" />
        <button>Add Contact</button>
      </form>
    </>
  );
};

export default AddContact;
