import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ADHDScreening.css';

function ADHDScreening() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(10).fill(null)); // 10 questions
  const [result, setResult] = useState(null);

  // ADHD Screening Questions
  const questions = [
    "Do you often have trouble focusing on tasks or staying organized?",
    "Do you frequently feel restless or have difficulty sitting still?",
    "Do you often interrupt others or have trouble waiting your turn?",
    "Do you frequently lose things necessary for tasks or activities?",
    "Do you often forget daily activities or appointments?",
    "Do you have difficulty following through on instructions or finishing tasks?",
    "Do you often avoid tasks that require sustained mental effort?",
    "Do you frequently make careless mistakes in work or school?",
    "Do you often feel like you're 'on the go' or driven by a motor?",
    "Do you have trouble managing your time or meeting deadlines?"
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
      setResult("Your responses suggest you may be experiencing symptoms of ADHD. It’s important to speak with a mental health professional for further evaluation.");
    } else if (score >= 3) {
      setResult("Your responses indicate some symptoms of ADHD. Consider monitoring your symptoms and seeking support if they persist.");
    } else {
      setResult("Your responses suggest minimal or no symptoms of ADHD. If you have concerns, consider speaking with a mental health professional.");
    }
  };

  return (
    <div className="adhd-screening">
      <h1>ADHD Screening Test</h1>
      <p>
        This test is designed to help you understand if you may be experiencing symptoms of Attention-Deficit/Hyperactivity Disorder (ADHD). Answer the following questions honestly based on your experiences over the past month.
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
              <strong>Learn more about ADHD:</strong> Read about ADHD symptoms, causes, and treatment options.
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

export default ADHDScreening;