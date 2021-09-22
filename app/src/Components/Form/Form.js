import React from "react";

const Form = ({ contact, handleEditFormSubmit }) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input className="form-control" id="id" defaultValue={contact.id} />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input className="form-control" id="name" defaultValue={contact.name} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          defaultValue={contact.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          className="form-control"
          id="phone"
          defaultValue={contact.phone}
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <input
          className="form-control"
          id="notes"
          defaultValue={contact.notes}
        />
      </div>
      <div className="form-group">
        <label htmlFor="funfact">Funfact</label>
        <input
          className="form-control"
          id="funfact"
          defaultValue={contact.funfact}
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
