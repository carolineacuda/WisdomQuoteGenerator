// src/components/QuoteDisplay.js
import React from 'react';

const QuoteDisplay = ({ quoteData }) => {
  if (!quoteData) return <p>Select a mood to see a quote.</p>;

  return (
    <div className="quote-display">
      <blockquote>{quoteData.quote}</blockquote>
      <p><em>Description:</em> {quoteData.description}</p>
      <p><em>Moods:</em> {quoteData.mood_categories.join(', ')}</p>
      {/* <p><em>Topics:</em> {quoteData.topic_categories.join(', ')}</p> */}
      <h3>Source: {quoteData.source}</h3>
    </div>
  );
};


export default QuoteDisplay;
