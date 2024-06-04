import express, { Request, Response } from "express";
import { getAllCities, getCityById, getCityByQuery } from "../controllers/cityController";

const router = express.Router();

router.get("/", getAllCities);
router.get("/:id", getCityById);
// router.get("?name='new_york'", getCityByQuery);

export default router;
