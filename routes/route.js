import express from "express";
//import { getInitialData } from "../controllers/geodata";
import { getDBData } from "../controllers/geodata.js";
const router = express.Router();

// router.get("/", getInitialData);
router.get("/", getDBData);

export default router;