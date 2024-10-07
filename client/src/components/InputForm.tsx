import { useState } from "react";
import { ZodError } from "zod";
import { getMedian } from "../services/compute";

export const InputForm = ({
  upperLimit,
  setUpperLimit,
  setResult,
}: {
  upperLimit: string;
  setUpperLimit: (s: string) => void;
  setResult: (arr: number[]) => void;
}) => {
  const resetForm = () => {
    setUpperLimit("");
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      console.log("About to try getMedian with upperLimit: ", upperLimit);
      const responseArray = await getMedian(upperLimit);
      console.log("Got responseArray: ", responseArray);
      setResult(responseArray);
      resetForm();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log("ZOD ERROR", error.message);
      }
      console.log("error in handleSubmit, ", error);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpperLimit(e.target.value);
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit} aria-label="form">
        <div className="input-group">
          <label htmlFor="upper-limit">Enter Upper Limit:</label>
          <input
            type="text"
            id="upper-limit"
            name="upper-limit"
            value={upperLimit}
            onChange={onChange}
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Submit</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};
