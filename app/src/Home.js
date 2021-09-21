import React from "react";

import AddContact from "./Components/AddContact";
import ContactDetail from "./Components/ContactDetail";
import ContactsList from "./Components/ContactsList";
import * as apiClient from "./apiClient";

const Home = () => {
  const [contacts, setContacts] = React.useState([]);
  const [selectedContact, setSelectedContact] = React.useState("");
  const [contactDetails, setContactDetails] = React.useState({});

  const loadContacts = async () => setContacts(await apiClient.getContacts());

  const addContact = async (contact) => {
    await apiClient.addContact(contact);
    loadContacts();
  };

  const editContact = async (contact, id) => {
    await apiClient.editContact(contact, id);
    loadContacts();
  };

  const deleteContact = (id) => {
    apiClient.deleteContact(id).then(loadContacts);
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
      <ContactsList
        {...{
          contacts,
          editContact,
          deleteContact,
          setSelectedContact,
        }}
      />
      {selectedContact ? (
        <ContactDetail {...{ selectedContact, contactDetails }} />
      ) : null}
      <AddContact {...{ addContact }} />
    </section>
  );
};

export default Home;
