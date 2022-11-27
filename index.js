import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import usersRoutes from "./routes/users.routes.js";
import panelsRoutes from "./routes/panels.routes.js";
import membersRoutes from "./routes/members.routes.js";
import todosRoutes from "./routes/todos.routes.js";
import participantsRoutes from "./routes/participants.routes.js";

import { connectDb } from "./database/connection.js";

dotenv.config();

// Initialization
const app = express();

// Midlewares
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cookieParser());

if (process.env.ENV === "PRO") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
  app.use(
    cors(
      cors({
        origin: ["https://toodoo.herokuapp.com"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    )
  );
} else if (process.env.ENV === "DEV") {
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
}

// Routes
app.use("/", usersRoutes);
app.use("/panels", panelsRoutes);
app.use("/members", membersRoutes);
app.use("/todos", todosRoutes);
app.use("/participants", participantsRoutes);

connectDb(app);
