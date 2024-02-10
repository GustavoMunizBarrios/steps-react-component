import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1); //updating state based on current state
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1); //updating state based on current state
    }
  }
  function handleCross() {
    setIsOpen((is) => !is); //updating state based on current state
  }

  return (
    <>
      <button className="close" onClick={handleCross}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>⬅</span>Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>➡</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function Button({ bgColor, textColor, onClick, children }) {
  // "children" is a predefine React keyword, this get has a prop everything between the tags of Button
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
