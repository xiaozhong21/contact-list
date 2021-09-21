import express, { response } from "express";

import * as db from "./db.mjs";

const contactRouter = express.Router();

contactRouter.get("/", async (request, response) => {
  const contacts = await db.getContacts();
  response.json(contacts);
});

contactRouter.get("/:id", async (request, response) =>
  response.json(await db.getContact(request.params.id)),
);

contactRouter.use(express.json());
contactRouter.post("/", async (request, response) => {
  response.status(201).json(await db.addContact(request.body));
});

contactRouter.put("/:id", async (request, response) => {
  console.log(request.body);
  response.status(201).json(await db.editContact(request.body, request.params.id));
});

export default contactRouter;
