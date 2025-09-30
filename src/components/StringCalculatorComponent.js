import React, { useState } from "react";
import AddNumbers from "../utils/AddNumbers";

const StringCalculatorComponent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
  try {
      setError(null);
      const res = AddNumbers(input);
      setResult(res);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div>
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
     <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default StringCalculatorComponent;
