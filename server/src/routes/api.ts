import express, { Express, NextFunction, Request, Response } from "express";
import { sieveOfEratosthenes, findMedian } from "./../controllers/controller";
import validateInput from "../middleware/middleware";
const router = express.Router();

router.get(
  "/api/:n",
  validateInput,
  (req: Request, res: Response, next: NextFunction) => {
    const n = req.params.n;
    const upperLimitNum = Number(n);
    try {
      const primeNumbers: number[] = sieveOfEratosthenes(upperLimitNum);
      const result = findMedian(primeNumbers);
      res.send(result);
    } catch (error) {
      console.log("Error trying sieve of eratosthenes in api.ts");
    }
  }
);

export default router;
