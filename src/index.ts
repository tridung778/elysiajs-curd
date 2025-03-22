import { Elysia, t } from "elysia";

const app = new Elysia()
  .post("/register", ({ body }) => `Welcome, ${body.username}!`, {
    body: t.Object({
      username: t.String(),
      email: t.String({ format: "email" }),
      age: t.Number({ minimum: 18 }),
    }),
  })
  .listen(3000);

console.log("🚀 Server is running on http://localhost:3000");
