// src/App.js
import React, { useState } from 'react';
import MoodSelector from './MoodSelector';
import QuoteDisplay from './QuoteDisplay';
import BrowseQuotes from './BrowseQuotes';

//import AdminLogin from './AdminLogin';
//import AdminDashboard from './AdminDashboard';

function App() {
  const [quoteData, setQuoteData] = useState(null);
  const [showAllQuotes, setShowAllQuotes] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


  const handleSelectMood = async (mood) => {
    // When a mood is selected, hide the browse all view
    setShowAllQuotes(false);
    try {
      const response = await fetch(`${API_URL}/quotes/random?mood=${encodeURIComponent(mood)}`);
      if (!response.ok) throw new Error('No quote found');
      const data = await response.json();
      setQuoteData(data);
    } catch (error) {
      console.error(error);
      setQuoteData(null);
    }
  };

  const handleBrowseAll = () => {
    setShowAllQuotes(true);
  };

  return (
    <div className="App">
      <h1>Wisdom Quote Generator</h1>
      <MoodSelector onSelectMood={handleSelectMood} />
     
      {showAllQuotes ? <BrowseQuotes /> : <QuoteDisplay quoteData={quoteData} />}
      {/* <button onClick={handleBrowseAll} style={{ margin: '1rem', padding: '0.5rem 1rem', borderRadius: '4px' }}>
        Browse All Quotes
      </button> */}
    </div>
  );
}

export default App;
