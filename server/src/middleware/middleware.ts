import { Request, Response, NextFunction } from "express";

// Define the middleware function with type annotations
function validateInput(req: Request, res: Response, next: NextFunction): void {
  const { n } = req.params;

  // Check if n is a valid positive integer
  if (
    !Number.isInteger(Number(n)) || // if input is not integer
    Number(n) <= 0 || // or input is negative
    Number(n) > 40_000_000 // or input is too large
  ) {
    res
      .status(400)
      .json({
        error: "Invalid input. n must be a positive integer > 0 < 40_000_000.",
      });
  } else {
    next(); // Proceed to the next middleware if valid
  }
}

export default validateInput;
