import React from "react";

import AddContact from "./Components/AddContact";
import ContactDetail from "./Components/ContactDetail";
import Contacts from "./Components/Contacts";
import * as apiClient from "./apiClient";

const Home = () => {
  const [contacts, setContacts] = React.useState([]);
  const [selectedContact, setSelectedContact] = React.useState("");
  const [contactDetails, setContactDetails] = React.useState({});
  const [id, setId] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phone, setPhone] = React.useState();
  const [notes, setNotes] = React.useState();

  const loadContacts = async () => setContacts(await apiClient.getContacts());

  const addContact = async (contact) => {
    await apiClient.addContact(contact);
    loadContacts();
  };

  const editContact = async (contact, id) => {
    await apiClient.editContact(contact, id);
    loadContacts();
  };

  const loadContact = React.useCallback(
    () => apiClient.getContact(selectedContact).then(setContactDetails),
    [selectedContact],
  );

  React.useEffect(() => {
    selectedContact !== undefined && loadContact();
  }, [selectedContact, loadContact]);

  React.useEffect(() => {
    loadContacts();
  }, []);

  return (
    <section>
      <Contacts
        {...{
          contacts,
          id,
          name,
          email,
          phone,
          notes,
          setId,
          setName,
          setEmail,
          setPhone,
          setNotes,
          editContact,
          setSelectedContact,
        }}
      />
      {/* <Contacts {...{ contacts, values, set }} /> */}
      {selectedContact ? (
        <ContactDetail {...{ selectedContact, contactDetails }} />
      ) : null}
      <AddContact {...{ addContact }} />
    </section>
  );
};

export default Home;
