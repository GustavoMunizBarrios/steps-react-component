import { useState } from "react";

export default function DateCount() {
  return (
    <>
      {/* STEPS */}
      <div style={{ display: "flex", color: "white" }}>
        <button style={{ width: "40px", margin: "10px" }}>-</button>
        <p>Step: 5</p>
        <button style={{ width: "40px", margin: "10px" }}>+</button>
      </div>

      {/* COUNT */}
      <div style={{ display: "flex", color: "white" }}>
        <button style={{ width: "40px", margin: "10px" }}>-</button>
        <p>Count: 25</p>
        <button style={{ width: "40px", margin: "10px" }}>+</button>
      </div>
    </>
  );
}
