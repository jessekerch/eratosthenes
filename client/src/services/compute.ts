import axios from "axios";
// import {
//   productSchema,
//   productsSchema,
//   Product,
//   NewProduct,
//   EditedProduct,
//   ProductAndItem,
//   productAndItemSchema,
// } from "../types";
// ## 1 GET /

// const BASEURL = "http://localhost:3000/";

export const getMedian = async (nStr: string) => {
  // console.log("About to convert nStr to number: ", nStr);
  const n = Number(nStr);
  // if (!n || n !== 0) {
  //   throw new Error("Invalid upper limit input to getMedian in compute.ts");
  // }
  console.log("About to axios.get with n: ", n);
  try {
    const { data } = await axios.get<number[]>(`/api/${n}`);
    // console.log("Got back data: ", data);
    // console.log("Returning from compute.ts data: ", data);
    return data;
  } catch (error) {
    console.log("Error in compute.ts getMedian error: ", error);
  }
};
