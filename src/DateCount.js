import { useState } from "react";

export default function DateCount() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  function handleMinusStep() {
    setStep((s) => s - 1);
  }
  function handleSumStep() {
    setStep((s) => s + 1);
  }
  function handleMinusCount() {
    setCount((c) => c - step);
  }
  function handleSumCount() {
    setCount((c) => c + step);
  }

  return (
    <>
      {/********** STEPS ************/}
      <div style={{ display: "flex", color: "white" }}>
        <button
          onClick={handleMinusStep}
          style={{ width: "40px", margin: "10px" }}
        >
          -
        </button>
        <p>
          Step: <span>{step}</span>{" "}
        </p>
        <button
          onClick={handleSumStep}
          style={{ width: "40px", margin: "10px" }}
        >
          +
        </button>
      </div>

      {/*********** COUNT ************/}
      <div style={{ display: "flex", color: "white" }}>
        <button
          onClick={handleMinusCount}
          style={{ width: "40px", margin: "10px" }}
        >
          -
        </button>
        <p>
          Count: <span>{count}</span>
        </p>
        <button
          onClick={handleSumCount}
          style={{ width: "40px", margin: "10px" }}
        >
          +
        </button>
      </div>
    </>
  );
}
