import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { describe, it, expect, afterEach, vi } from "vitest";
import App from "./App";

// vi.mock("./services/compute");

// const mockedComputeService = vi.mocked({}, true);

afterEach(() => {
  vi.resetAllMocks();
});

// const mockProductsData: Product[] = [
//   { _id: "1", title: "Product 1", price: 10, quantity: 5 },
//   { _id: "2", title: "Product 2", price: 20, quantity: 3 },
// ];

// const mockCartItemsData: CartItem[] = [
//   { _id: "1", productId: "1", title: "CartItem 1", price: 10, quantity: 1 },
// ];

describe("Renders main page correctly", () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const h1 = await screen.findByText(
      "Median Prime Number of Given Upper Limit"
    );

    // Expectations
    expect(h1).toBeInTheDocument();
  });

  // it("should call findMedian with input 10", async () => {
  //   // Setup
  //   render(<App />);
  //   const h1 = await screen.findByText(
  //     "Median Prime Number of Given Upper Limit"
  //   );

  // Expectations
  //   expect(h1).toBeInTheDocument();
  // });
});
