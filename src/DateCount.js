import { useState } from "react";

export default function DateCount() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

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
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        {/*          <button
          onClick={handleMinusStep}
          style={{ width: "40px", margin: "10px" }}
        >
          -
        </button> */}
        <p>
          Step: <span>{step}</span>
        </p>
        {/*         <button
          onClick={handleSumStep}
          style={{ width: "40px", margin: "10px" }}
        >
          +
        </button>  */}
      </div>

      {/*********** COUNT ************/}
      <div style={{ display: "flex", color: "white" }}>
        <button
          onClick={handleMinusCount}
          style={{ width: "40px", margin: "10px" }}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button
          onClick={handleSumCount}
          style={{ width: "40px", margin: "10px" }}
        >
          +
        </button>
      </div>
      {/********** Date ************/}
      {count > 0 ? (
        <p style={{ color: "white" }}>
          {`${count} days from today is ${date.toDateString()}`}
        </p>
      ) : (
        <p style={{ color: "white" }}>
          {`${count} days ago was ${date.toDateString()}`}
        </p>
      )}
    </>
  );
}
