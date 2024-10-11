import { describe, expect, it } from "vitest";
import { findMedian, sieveOfEratosthenes } from "./controller";

const upperLimit = 10;
const mockPrimes = [2, 3, 5, 7];

describe("controller tests", () => {
  it("findMedian of [2,3,5,7] is [3,5]", async () => {
    expect(findMedian(mockPrimes)).toStrictEqual([3, 5]);
  });

  it("prime numbers with upper limit 10 are [2,3,5,7]", async () => {
    expect(sieveOfEratosthenes(upperLimit)).toStrictEqual([2, 3, 5, 7]);
  });
});
