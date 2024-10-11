import axios from "axios";
import { z } from "zod";

const medianSchema = z.array(z.number());
type MedianArray = z.infer<typeof medianSchema>;

export const getMedian = async (nStr: string) => {
  const n = Number(nStr);
  const { data } = await axios.get<MedianArray>(`/api/${n}`);
  return medianSchema.parse(data);
};
