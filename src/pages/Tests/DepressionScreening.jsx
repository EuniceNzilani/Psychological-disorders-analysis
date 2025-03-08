import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DepressionScreening.css';

function DepressionScreening() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null)); // 10 questions
  const [result, setResult] = useState(null);

  // Depression Screening Questions
  const questions = [
    "Do you often feel sad, empty, or hopeless?",
    "Have you lost interest in activities you once enjoyed?",
    "Do you feel fatigued or have low energy most days?",
    "Do you have trouble sleeping or sleep too much?",
    "Do you experience changes in appetite or weight?",
    "Do you feel worthless or guilty?",
    "Do you have difficulty concentrating or making decisions?",
    "Do you feel restless or slowed down?",
    "Do you have recurrent thoughts of death or suicide?",
    "Do you feel like life is not worth living?"
  ];

  // Handle answer selection
  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  // Calculate results
  const calculateResult = () => {
    const score = answers.filter((answer) => answer === 'Often' || answer === 'Always').length;
    if (score >= 6) {
      setResult("Your responses suggest you may be experiencing symptoms of depression. It’s important to speak with a mental health professional for further evaluation.");
    } else if (score >= 3) {
      setResult("Your responses indicate some symptoms of depression. Consider monitoring your symptoms and seeking support if they persist.");
    } else {
      setResult("Your responses suggest minimal or no symptoms of depression. If you have concerns, consider speaking with a mental health professional.");
    }
  };

  return (
    <div className="depression-screening">
      <h1>Depression Screening Test</h1>
      <p>
        This test is designed to help you understand if you may be experiencing symptoms of depression. Answer the following questions honestly based on your experiences over the past month.
      </p>

      {!result ? (
        <div className="test-questions">
          {questions.map((question, index) => (
            <div key={index} className="question">
              <p>{question}</p>
              <div className="options">
                {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleAnswer(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button onClick={calculateResult}>Submit</button>
        </div>
      ) : (
        <div className="test-results">
          <h2>Your Results</h2>
          <p>{result}</p>
          <h3>Next Steps</h3>
          <ul>
            <li>
              <strong>Speak with a professional:</strong> Consider reaching out to a therapist or psychiatrist for further evaluation.
            </li>
            <li>
              <strong>Learn more about depression:</strong> Read about depression symptoms, causes, and treatment options.
            </li>
            <li>
              <strong>Join a support group:</strong> Connect with others who understand what you're going through.
            </li>
            <li>
              <strong>Practice self-care:</strong> Explore relaxation techniques, mindfulness, and stress management strategies.
            </li>
          </ul>
          <button onClick={() => navigate('/resources')}>Find Resources</button>
        </div>
      )}
    </div>
  );
}

export default DepressionScreening;