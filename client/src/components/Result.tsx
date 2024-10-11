import { ResultType } from "./../types/types";

export const Result = ({
  result,
  setResult,
}: {
  result: ResultType;
  setResult: (result: ResultType) => void;
}) => {
  const limit = Number(result.limit).toLocaleString();
  const medianArr = result.medianArr;
  return (
    <div className="result">
      {medianArr.length === 1 ? (
        <>
          <h3>Of all prime numbers below {`${limit}`},</h3>
          <h3>the median number is {medianArr[0].toLocaleString()}</h3>
        </>
      ) : (
        <>
          <h3>Of all prime numbers below {`${limit}`}</h3>
          <h3>
            the median numbers are{" "}
            {`${medianArr[0].toLocaleString()} and ${medianArr[1].toLocaleString()}`}
          </h3>
        </>
      )}
      <button
        type="reset"
        onClick={() => setResult({ limit: "", medianArr: [] })}
      >
        Reset
      </button>
    </div>
  );
};
