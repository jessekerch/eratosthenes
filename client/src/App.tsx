import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { Result } from "./components/Result";

function App() {
  const [upperLimit, setUpperLimit] = useState("");
  const [result, setResult] = useState<number[]>([]);

  return (
    <>
      <h1>Median Prime Number of Given Upper Limit</h1>
      <p>
        This application will find <em>the median prime number</em> of all prime
        numbers up to the upper limit which you enter. This application uses the
        "Sieve of Eratosthenes", an ancient algorithm for finding all prime
        numbers up to any given limit.
      </p>
      <InputForm
        upperLimit={upperLimit}
        setUpperLimit={setUpperLimit}
        setResult={setResult}
      />
      <Result result={result} />
    </>
  );
}

export default App;
