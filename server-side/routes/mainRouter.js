import express from "express";
import mainController from "../controllers/main.js";

const router = express.Router();

// Endpoint for user registration data
router.post("/registration", mainController.registrationData);

// Endpoint to retrieve all user data
router.get("/alldata", mainController.getAllData);

export default router;
