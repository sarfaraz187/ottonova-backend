import { Request, Response, NextFunction } from "express";
export const setCache = function (req: Request, res: Response, next: NextFunction) {
  // Keep cache for 5 minutes (in seconds)
  const period = 60 * 5;

  if (req.method === "GET") {
    res.set("Cache-control", `public, max-age=${period}`);
  } else {
    res.set("Cache-control", "no-store");
  }
  next();
};
