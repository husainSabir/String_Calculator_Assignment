import React, { useState } from "react";
import AddNumbers from "../utils/AddNumbers";

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f9f9f9, #e3f2fd);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Input = styled.input`
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #90caf9;
  border-radius: 6px;
  width: 320px;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #42a5f5;
    box-shadow: 0 0 6px rgba(66, 165, 245, 0.5);
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #42a5f5;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 12px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #1e88e5;
    transform: translateY(-2px);
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  color: #1565c0;
  font-weight: 500;
`;

const Error = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  color: #d32f2f;
  font-weight: bold;
`;



const StringCalculatorComponent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
  try {
      setError(null);
      const res = AddNumbers(input.replace(/\\n/g, '\n'));
      setResult(res);
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <Container>
      <h1>String Calculator</h1>
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
     <Button onClick={handleCalculate}>Calculate</Button>
      {result !== null && <Result>Result: {result}</Result>}
      {error && <Error>Error: {error}</Error>}
    </Container>
  );
};

export default StringCalculatorComponent;
