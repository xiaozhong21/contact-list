import React from "react";

import Container from "./Container/Container.js";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
  funfact: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "editId":
      return { ...state, id: action.payload };
    case "editName":
      return { ...state, name: action.payload };
    case "editEmail":
      return { ...state, email: action.payload };
    case "editPhone":
      return { ...state, phone: action.payload };
    case "editNotes":
      return { ...state, notes: action.payload };
    case "editFunfact":
      return { ...state, funfact: action.payload };
    case "clearForm":
      return initialState;
    default:
      return state;
  }
};

const ContactsList = ({
  contacts,
  editContact,
  deleteContact,
  setSelectedContact,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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
    dispatch({
      type: "clearForm",
    });
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
                    state,
                    dispatch,
                    handleEditFormSubmit,
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
