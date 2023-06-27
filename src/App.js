import { useState } from "react";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);

  const nextMessage = function () {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const prevMessage = function () {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">{messages[step - 1]}</p>
      <div className="buttons">
        <button
          onClick={prevMessage}
          style={{
            backgroundColor: "#7950F2",
            color: "fff",
          }}
        >
          Previous
        </button>
        <button
          onClick={nextMessage}
          style={{
            backgroundColor: "#7950F2",
            color: "fff",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
