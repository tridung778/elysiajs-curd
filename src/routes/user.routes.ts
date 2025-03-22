import { Elysia, t } from "elysia";
import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";

export const userRoutes = new Elysia()
  .get("/users", async () => getUsers())

  .post("/users", async ({ body }) => createUser(body), {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: "email" }),
      age: t.Number({ minimum: 18 }),
    }),
  })

  .get("/users/:id", async ({ params }) => getUserById(params.id))

  .put("/users/:id", async ({ params, body }) => updateUser(params.id, body), {
    body: t.Object({
      name: t.String(),
      email: t.String({ format: "email" }),
      age: t.Number({ minimum: 18 }),
    }),
  })

  .delete("/users/:id", async ({ params }) => deleteUser(params.id));
