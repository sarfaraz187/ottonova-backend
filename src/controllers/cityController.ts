import { Request, Response } from "express";
import { City } from "../models/cityModel.ts";
import citiesJson from "../data/cities.json";
const cities: City[] = citiesJson.cities;

export const getAllCities = (req: Request, res: Response) => {
  res.json(cities);
};

export const getCityById = (req: Request, res: Response) => {
  console.log(req);
  if (!req.params?.id) res.status(404);
  const foundCity = citiesJson.cities.find((cityObj) => cityObj.id == Number(req.params.id));
  foundCity ? res.json(foundCity) : res.status(404);
};
