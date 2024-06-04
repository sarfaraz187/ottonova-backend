import { Request, Response } from "express";
import { City } from "../models/cityModel.ts";
import citiesJson from "../data/cities.json";
const cities: City[] = citiesJson.cities;

export const getAllCities = (req: Request, res: Response) => {
  console.log(req, "Query :", req.query);

  if (req.query?.name) {
    getCityByQuery(req, res);
    return;
  }

  if (cities.length > 0) {
    res.status(200).json({ status: "success", cities });
  } else {
    res.status(404).send({ status: "fail", message: "No Cities Available to display" });
  }
};

export const getCityById = (req: Request, res: Response) => {
  try {
    const cityId = req.params?.id;
    console.log(req.query);

    if (!cityId) return res.status(400).json({ status: "fail", message: "City ID is missing." });

    const foundCity = citiesJson.cities.find((cityObj) => cityObj.id == Number(cityId));
    if (!foundCity) return res.status(404).json({ status: "fail", message: "City not found" });

    return res.status(200).json({ status: "success", city: foundCity });
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

export const getCityByQuery = (req: Request, res: Response) => {
  try {
    if (req.query && req.query?.name) {
      const filteredCities = citiesJson.cities.filter((cityObj) => cityObj.name.includes(req?.query?.name as string));
      console.log("Filtered Cities :", filteredCities);
      if (filteredCities.length > 0) {
        res.status(200).json({ status: "success", results: filteredCities });
      } else {
        return res.status(404).json({ status: "fail", message: "Empty search results" });
      }
    }
  } catch (error) {
    return res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};
