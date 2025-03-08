import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PTSDScreening.css';

function PTSDScreening() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null)); // 10 questions
  const [result, setResult] = useState(null);

  // PTSD Screening Questions
  const questions = [
    "Do you have recurring, distressing memories of a traumatic event?",
    "Do you have nightmares about the traumatic event?",
    "Do you feel like you are reliving the traumatic event (flashbacks)?",
    "Do you avoid places, people, or activities that remind you of the traumatic event?",
    "Do you feel emotionally numb or detached from others?",
    "Do you have difficulty sleeping or concentrating?",
    "Do you feel irritable or have angry outbursts?",
    "Do you feel constantly on guard or easily startled?",
    "Do you feel intense guilt or shame about the traumatic event?",
    "Do you feel like life is meaningless or hopeless?"
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
      setResult("Your responses suggest you may be experiencing symptoms of Post-Traumatic Stress Disorder (PTSD). It’s important to speak with a mental health professional for further evaluation.");
    } else if (score >= 3) {
      setResult("Your responses indicate some symptoms of PTSD. Consider monitoring your symptoms and seeking support if they persist.");
    } else {
      setResult("Your responses suggest minimal or no symptoms of PTSD. If you have concerns, consider speaking with a mental health professional.");
    }
  };

  return (
    <div className="ptsd-screening">
      <h1>PTSD Screening Test</h1>
      <p>
        This test is designed to help you understand if you may be experiencing symptoms of Post-Traumatic Stress Disorder (PTSD). Answer the following questions honestly based on your experiences over the past month.
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
              <strong>Learn more about PTSD:</strong> Read about PTSD symptoms, causes, and treatment options.
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

export default PTSDScreening;