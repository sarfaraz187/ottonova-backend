import { Request, Response } from "express";
import { City } from "../models/cityModel.ts";
import citiesJson from "../data/cities.json";
const cities: City[] = citiesJson.cities;

export const getAllCities = (req: Request, res: Response) => res.json(cities);

export const getCityById = (req: Request, res: Response) => {
  try {
    if (!req.params?.id) throw new Error("City ID is missing");
    const foundCity = citiesJson.cities.find((cityObj) => cityObj.id == Number(req.params.id));

    if (!foundCity) throw new Error("City not found");
    res.json(foundCity);
  } catch (error) {
    res.status(404).send({
      status: 404,
      message: error.message,
    });
  }
};
