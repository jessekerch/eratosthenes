import express, { Express, Request, Response } from "express";
import { sieveOfEratosthenes, findMedian } from "./../controllers/controller";
const router = express.Router();

router.get("/api/:n", (req: Request, res: Response) => {
  const n = req.params.n;
  const upperLimitNum = Number(n);
  try {
    const primeNumbers: number[] = sieveOfEratosthenes(upperLimitNum);
    const result = findMedian(primeNumbers);
    res.send(result);
  } catch (error) {
    console.log("Error trying sieve of eratosthenes in api.ts");
  }
});

export default router;
