export const Result = ({ result }: { result: number[] }) => {
  return (
    <div>
      <h1>Your Result</h1>
      {result.length > 0 && (
        <div className="result">
          <p>The median prime number or numbers: {`[${result}]`}</p>
        </div>
      )}
    </div>
  );
};
