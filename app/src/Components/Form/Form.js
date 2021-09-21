import React from "react";

const Form = ({ state, dispatch, handleEditFormSubmit }) => {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input
          className="form-control"
          id="id"
          value={state.id}
          onChange={(e) =>
            dispatch({
              type: "editId",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          id="name"
          defaultValue={state.name}
          onChange={(e) =>
            dispatch({
              type: "editName",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          defaultValue={state.email}
          onChange={(e) =>
            dispatch({
              type: "editEmail",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          className="form-control"
          id="phone"
          defaultValue={state.phone}
          onChange={(e) =>
            dispatch({
              type: "editPhone",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <input
          className="form-control"
          id="notes"
          defaultValue={state.notes}
          onChange={(e) =>
            dispatch({
              type: "editNotes",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label htmlFor="funfact">Funfact</label>
        <input
          className="form-control"
          id="funfact"
          defaultValue={state.funfact}
          onChange={(e) =>
            dispatch({
              type: "editFunfact",
              payload: e.target.value,
            })
          }
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
