import React, { useState } from 'react';
import './App.css';

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
}

export default App;
