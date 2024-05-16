import express, { Request, Response } from "express";
import { getAllCities, getCityById } from "../controllers/cityController";

const router = express.Router();

router.get("/", getAllCities);
router.get("/:id", getCityById);

export default router;
