import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { City } from "../models/city.ts";
import citiesJson from "../data/cities.json";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server jjj");
});

app.get("/cities", (req: Request, res: Response) => {
  const cities: City[] = citiesJson.cities;
  console.log("Available Cities :", cities);
  res.send(cities);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
