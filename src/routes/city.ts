import express, { Request, Response } from "express";
import { getAllCities, getCityById } from "../controllers/cityController";

const router = express.Router();

console.log("Router :", router);
router.get("/", async (req: Request, res: Response) => {
  const cities = await [];
  res.json(cities);
});

// router.get(":id", getCityById);

export default router;
