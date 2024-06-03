import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import express, { Express } from "express";
import { setCache } from "./middlewares/cache.ts";
import useCityRoute from "./routes/city.ts";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(setCache);
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/cities", useCityRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
