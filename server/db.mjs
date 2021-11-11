import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getContacts = () => db.any("SELECT * FROM contacts");

export const getContact = (id) => db.one(`SELECT * FROM contacts WHERE id=${id}`, {id});

export const addContact = (contact) =>
  db.one("INSERT INTO contacts(name, email, phone, notes, funfact) VALUES(${name}, ${email}, ${phone}, ${notes}, ${funfact}) RETURNING *", contact);

export const editContact = (contact, id) =>
  db.one("UPDATE contacts SET name=${name}, email=${email}, phone=${phone}, notes=${notes}, funfact=${funfact} WHERE id=${id} RETURNING *", contact, id);

export const deleteContact = (id) =>
  db.none("DELETE FROM contacts WHERE id = ${id}", {id});

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
