import { Context } from "elysia";

export const validateRequest = async (ctx: Context, next: Function) => {
  const body = ctx.body as { name: string; email: string };
  if (!body.name || !body.email) {
    return { error: "Name and email are required" };
  }
  return next();
};
