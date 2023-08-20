import express from "express";
import mainController from "../controllers/main.js";

const router = express.Router();

router.post("/registrationdata", mainController.registrationData);
router.get('/alldata',mainController.getAllData)

export default router;
