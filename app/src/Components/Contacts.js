import Container from "./Container/Container.js";

const Contacts = ({
  contacts,
  editContact,
  setId,
  setName,
  setEmail,
  setPhone,
  setNotes,
  setSelectedContact,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const {
      id: { value: id },
      name: { value: name },
      email: { value: email },
      phone: { value: phone },
      notes: { value: notes },
    } = form.elements;
    editContact(
      {
        id,
        name,
        email,
        phone,
        notes,
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
          </tr>
        </thead>
        <tbody>
          {contacts.map(({ id, name, email, phone, notes }) => (
            <tr key={id} onClick={() => setSelectedContact(id)}>
              <td>
                <Container
                  {...{
                    id,
                    name,
                    email,
                    phone,
                    notes,
                    contacts,
                    setId,
                    setName,
                    setEmail,
                    setPhone,
                    setNotes,
                    onSubmit,
                  }}
                />
                {/* <button onClick={() => setSelectedContact(id)}>Details</button> */}
                {name}
              </td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
