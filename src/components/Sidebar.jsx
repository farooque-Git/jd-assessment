import { useState } from "react";
import "./Sidebar.css";

const questions = [
  {
    id: 1,
    title:
      "1. Write clean, efficient, and well-documented JavaScript, HTML, and CSS code, adhering to best practices and coding standards",
    code: [
      `const countDisplay = document.getElementById('countValue');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
}

function incrementCounter() {
  count += 1;
  updateDisplay();
}

function resetCounter() {
  count = 0;
  updateDisplay();
}

incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);

updateDisplay();
`,
      `fu<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Counter App</title>
  <!-- Link to external CSS -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app-container">
    <h1 class="app-title">Counter App</h1>
    <div class="counter">
      <p class="count-display">Count: <span id="countValue">0</span></p>
      <button id="incrementButton" class="button">Increment</button>
      <button id="resetButton" class="button">Reset</button>
    </div>
  </div>
  
  <script src="app.js"></script>
</body>
</html>
`,
      `
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}


.app-container {
  text-align: center;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 2rem;
  color: #333;
}


.counter {
  margin-top: 20px;
}


.count-display {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.button {
  padding: 10px 20px;
  font-size: 1rem;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #45a049;
}

.button:active {
  background-color: #388e3c;
}
`,
    ],
  },
  {
    id: 2,
    title: "2. Build reusable UI components and libraries for future use.",
    code: [
      `
      //reusable button code
      import React from "react";
  
  const Button = ({ label, onClick, type = "button" }) => {
    return (
      <button type={type} className={\`btn \${styleClass}\`} onClick={onClick}>
        {label}
      </button>
    );
  };
  
  export default Button;`,
    ],
  },
  {
    id: 3,
    title:
      "3. Write unit, integration, and end-to-end tests using frameworks like Jest, Enzyme, React Testing Library, or Cypress to ensure code quality and application stability.",
    code: [
      `function Form() {
  const [input, setInput] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', input);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}`,
      `
test("increments count when button is clicked", () => {
  const { getByText } = render(<Counter />);
  const button = getByText("Increment");
  fireEvent.click(button);
  expect(getByText("Count: 1")).toBeInTheDocument();
});
`,
    ],
  },
];

function Sidebar() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="container">
      <div className="sidebar">
        <h2>JD Assessment</h2>
        {questions.map((q) => (
          <div
            key={q.id}
            className={`question ${
              selectedQuestion?.id === q.id ? "active" : ""
            }`}
            onClick={() => setSelectedQuestion(q)}
          >
            {q.title}
          </div>
        ))}
      </div>
      <div className="content">
        {selectedQuestion ? (
          <div className="solution">
            <h3>{selectedQuestion.title}</h3>
            <div className="code-grid">
              {selectedQuestion.code.map((codeSnippet, index) => (
                <div key={index} className="code-item">
                  <pre>
                    <code>{codeSnippet}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>JD Assessmemt Question and Answer.</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
