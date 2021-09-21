import React from "react";

const Form = ({
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
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input
          className="form-control"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          className="form-control"
          id="phone"
          defaultValue={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <input
          className="form-control"
          id="notes"
          defaultValue={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Edit
        </button>
      </div>
    </form>
  );
};

export default Form;
