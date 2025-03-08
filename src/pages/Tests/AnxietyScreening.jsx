import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnxietyScreening.css';

function AnxietyScreening() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null)); // 10 questions
  const [result, setResult] = useState(null);

  // Anxiety Screening Questions
  const questions = [
    "Do you often feel excessively worried or nervous?",
    "Do you experience physical symptoms like a racing heart or sweating when anxious?",
    "Do you have trouble controlling your worries?",
    "Do you avoid situations or activities because they make you anxious?",
    "Do you feel restless or on edge most of the time?",
    "Do you have difficulty concentrating due to anxiety?",
    "Do you feel fatigued or easily tired due to anxiety?",
    "Do you experience muscle tension or aches due to anxiety?",
    "Do you have trouble falling or staying asleep due to anxiety?",
    "Do you feel irritable or easily agitated due to anxiety?"
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
      setResult("Your responses suggest you may be experiencing symptoms of Generalized Anxiety Disorder. It’s important to speak with a mental health professional for further evaluation.");
    } else if (score >= 3) {
      setResult("Your responses indicate some symptoms of anxiety. Consider monitoring your symptoms and seeking support if they persist.");
    } else {
      setResult("Your responses suggest minimal or no symptoms of anxiety. If you have concerns, consider speaking with a mental health professional.");
    }
  };

  return (
    <div className="anxiety-screening">
      <h1>Anxiety Screening Test</h1>
      <p>
        This test is designed to help you understand if you may be experiencing symptoms of Generalized Anxiety Disorder. Answer the following questions honestly based on your experiences over the past month.
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
              <strong>Learn more about anxiety:</strong> Read about anxiety symptoms, causes, and treatment options.
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

export default AnxietyScreening;