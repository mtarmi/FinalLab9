import React, { useState } from 'react';
import './App.css';

<<<<<<< HEAD
function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      computer: 'kompyuter',
      table: 'mesa',
      book: 'libro',
      water: 'tubig',
      food: 'pagkain',
      love: 'pag-ibig',
      friend: 'kaibigan',
      family: 'pamilya',
      school: 'paaralan',
      car: 'sasakyan',
      house: 'bahay',
      sun: 'araw',
      moon: 'buwan',
      star: 'bituin',
      tree: 'puno',
      flower: 'bulaklak',
      sky: 'kalangitan',
      ocean: 'karagatan',
      mountain: 'bundok',
      road: 'daan',
    
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>English to Tagalog Translator</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input type="text" value={englishWord} onChange={(e) => setEnglishWord(e.target.value)} />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
=======
const quizData = [
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], correctAnswer: 'Paris' },
    { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
    { question: 'Who wrote "Romeo and Juliet"?', options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'], correctAnswer: 'William Shakespeare' }
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerClick = (selectedAnswer) => {
        if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setShowResult(false);
        setScore(0);
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            {showResult ? (
                <div className="result">
                    <p>Your score: {score} out of {quizData.length}</p>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="question">
                        <p>{quizData[currentQuestion].question}</p>
                    </div>
                    <div className="options">
                        {quizData[currentQuestion].options.map((option, index) => (
                            <div key={index} className="option" onClick={() => handleAnswerClick(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
>>>>>>> 04fb4c75c45953e6df2c4669b7542f06b30b982c
}

export default App;
