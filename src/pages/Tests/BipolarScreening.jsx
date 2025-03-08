import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BipolarScreening.css';

function BipolarScreening() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null)); // 10 questions
  const [result, setResult] = useState(null);

  // Bipolar Disorder Screening Questions
  const questions = [
    "Do you experience periods of unusually high energy and mood?",
    "Do you feel like you need less sleep than usual during these periods?",
    "Do you feel more talkative or pressured to keep talking during these periods?",
    "Do you experience racing thoughts or feel like your mind is jumping from one idea to another?",
    "Do you engage in impulsive or risky behaviors during these periods?",
    "Do you experience periods of deep sadness or hopelessness?",
    "Do you lose interest in activities you once enjoyed during these periods?",
    "Do you feel fatigued or have low energy during these periods?",
    "Do you have trouble concentrating or making decisions during these periods?",
    "Do you experience changes in appetite or weight during these periods?"
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
      setResult("Your responses suggest you may be experiencing symptoms of Bipolar Disorder. It’s important to speak with a mental health professional for further evaluation.");
    } else if (score >= 3) {
      setResult("Your responses indicate some symptoms of Bipolar Disorder. Consider monitoring your symptoms and seeking support if they persist.");
    } else {
      setResult("Your responses suggest minimal or no symptoms of Bipolar Disorder. If you have concerns, consider speaking with a mental health professional.");
    }
  };

  return (
    <div className="bipolar-screening">
      <h1>Bipolar Disorder Screening Test</h1>
      <p>
        This test is designed to help you understand if you may be experiencing symptoms of Bipolar Disorder. Answer the following questions honestly based on your experiences over the past month.
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
              <strong>Learn more about Bipolar Disorder:</strong> Read about Bipolar Disorder symptoms, causes, and treatment options.
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

export default BipolarScreening;