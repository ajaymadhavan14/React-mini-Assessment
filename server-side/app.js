import express from "express";
import cors from "cors";
import logger from "morgan";
import { config } from "dotenv";

import dbConnection from "./config/connection.js";
import mainRouter from "./routes/mainRouter.js";

config();
const port = process.env.PORT || 3001;
const { DATABASE_URL } = process.env;
const app = express();

// Establish a connection to the database
dbConnection(DATABASE_URL);

// Middleware setup
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false, limit: "50mb" }));
app.use(logger("dev"));

// Routes
app.use("/", mainRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://127.0.0.1:${port}`);
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
