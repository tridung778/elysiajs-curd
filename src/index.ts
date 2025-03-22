import { Elysia, t } from "elysia";
import { connectDB } from "./config/database";
import { userRoutes } from "./routes/user.routes";

const app = new Elysia();

connectDB();

app.use(userRoutes);

app.listen(3000);

console.log("🚀 Server is running on http://localhost:3000");
