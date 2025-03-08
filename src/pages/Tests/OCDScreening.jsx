import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OCDScreening.css';

function OCDScreening() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null)); // 10 questions
  const [result, setResult] = useState(null);

  // OCD Screening Questions
  const questions = [
    "Do you experience intrusive thoughts that cause you anxiety?",
    "Do you feel compelled to perform certain rituals or behaviors to reduce anxiety?",
    "Do you spend a significant amount of time each day on obsessive thoughts or compulsions?",
    "Do you find it difficult to control your obsessive thoughts or compulsive behaviors?",
    "Do your obsessive thoughts or compulsions interfere with your daily life or relationships?",
    "Do you avoid certain situations or places because they trigger obsessive thoughts?",
    "Do you feel distressed if you are unable to complete a ritual or compulsion?",
    "Do you often seek reassurance from others about your fears or worries?",
    "Do you feel that your obsessive thoughts are irrational but cannot stop them?",
    "Do you experience physical symptoms (e.g., sweating, rapid heartbeat) due to obsessive thoughts?"
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
      setResult("Your responses suggest you may be experiencing symptoms of OCD. It’s important to speak with a mental health professional for further evaluation.");
    } else if (score >= 3) {
      setResult("Your responses indicate some symptoms of OCD. Consider monitoring your symptoms and seeking support if they persist.");
    } else {
      setResult("Your responses suggest minimal or no symptoms of OCD. If you have concerns, consider speaking with a mental health professional.");
    }
  };

  return (
    <div className="ocd-screening">
      <h1>OCD Screening Test</h1>
      <p>
        This test is designed to help you understand if you may be experiencing symptoms of Obsessive-Compulsive Disorder (OCD). Answer the following questions honestly based on your experiences over the past month.
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
              <strong>Learn more about OCD:</strong> Read about OCD symptoms, causes, and treatment options.
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

export default OCDScreening;