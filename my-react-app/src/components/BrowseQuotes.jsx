// src/components/BrowseQuotes.js
import React, { useState, useEffect } from 'react';

const BrowseQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 10; // adjust as needed
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';


  useEffect(() => {
    const fetchQuotes = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}/quotes?page=${currentPage}&limit=${quotesPerPage}`
        );
        if (!response.ok) {
          throw new Error('Error fetching quotes');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [currentPage]);

  const handleNextPage = () => {
    // If the returned quotes are less than quotesPerPage, it may be the last page.
    if (quotes.length === quotesPerPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="quote-browser">
      <h2>All Quotes</h2>
      {loading && <p>Loading quotes...</p>}
      {error && <p>Error: {error}</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {quotes.map((quote) => (
          <li
            key={quote.id}
            style={{
              marginBottom: '2rem',
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <blockquote
              style={{
                fontStyle: 'italic',
                margin: '0 0 1rem 0',
              }}
            >
              {quote.quote}
            </blockquote>
            <p>
              <strong>Source:</strong> {quote.source}
            </p>
            <p>
              <strong>Description:</strong> {quote.description}
            </p>
            <p>
              <strong>Moods:</strong> {quote.mood_categories.join(', ')}
            </p>
            <p>
              <strong>Topics:</strong> {quote.topic_categories.join(', ')}
            </p>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ marginRight: '1rem' }}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={handleNextPage}
          // Disable "Next" if fewer quotes than expected are returned (last page)
          disabled={quotes.length < quotesPerPage}
          style={{ marginLeft: '1rem' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BrowseQuotes;
