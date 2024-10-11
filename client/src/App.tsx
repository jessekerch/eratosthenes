import { useState } from "react";
import "./assets/index.css";
import { InputForm } from "./components/InputForm";
import { Result } from "./components/Result";
import { ResultType } from "./types/types";

function App() {
  const [upperLimit, setUpperLimit] = useState("");
  const [result, setResult] = useState<ResultType>({
    limit: "",
    medianArr: [],
  });

  return (
    <div className="container">
      <h1>Median Prime Number</h1>
      <h3>of Given Upper Limit</h3>
      <p>
        This application will find <em>the median prime number (or numbers)</em>{" "}
        of all prime numbers below a given upper limit. It uses the
        <a href="https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes">
          "Sieve of Eratosthenes"
        </a>
        , an ancient algorithm for finding prime numbers.
      </p>
      <p>
        Instructions: Input an upper limit which is a positive integer, between
        1 and 40,000,000. The app will identify all prime numbers below your
        limit, and then display the one or two median prime numbers in the
        middle.
      </p>
      <InputForm
        upperLimit={upperLimit}
        setUpperLimit={setUpperLimit}
        setResult={setResult}
      />
      {result.medianArr.length > 0 && (
        <Result result={result} setResult={setResult} />
      )}
    </div>
  );
}

export default App;
