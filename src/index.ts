import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import useCityRoute from "./routes/city.ts";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use("/api/v1/cities", useCityRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
