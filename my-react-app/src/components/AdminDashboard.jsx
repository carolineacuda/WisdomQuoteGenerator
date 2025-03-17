// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import AdminQuoteForm from './AdminQuoteForm';

const AdminDashboard = ({ token }) => {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState('');

  // Fetch all quotes for the admin.
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('http://localhost:5000/quotes');
        if (!response.ok) throw new Error('Failed to fetch quotes');
        const data = await response.json();
        setQuotes(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuotes();
  }, [token]);

  // Add a new quote.
  const addQuote = async (quoteData) => {
    try {
      const response = await fetch('http://localhost:5000/admin/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(quoteData)
      });
      if (!response.ok) throw new Error('Failed to add quote');
      const newQuote = await response.json();
      setQuotes(prev => [...prev, newQuote]);
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete an existing quote.
  const deleteQuote = async (quoteId) => {
    try {
      const response = await fetch(`http://localhost:5000/admin/quotes/${quoteId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Failed to delete quote');
      setQuotes(prev => prev.filter(q => q.id !== quoteId));
    } catch (err) {
      setError(err.message);
    }
  };

  // (Optional) You could also add an edit function similar to addQuote.
  return (
    <div>
      <h2>Admin Dashboard</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>Add New Quote</h3>
      <AdminQuoteForm onSubmit={addQuote} />
      <h3>Existing Quotes</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
  {quotes.map((quote, index) => (
    <li
      key={quote.id || index}
      style={{
        marginBottom: '1rem',
        padding: '1rem',
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '8px'
      }}
    >
      <p><strong>Quote:</strong> {quote.quote}</p>
      <p><strong>Source:</strong> {quote.source}</p>
      <p><strong>Description:</strong> {quote.description}</p>
      <p><strong>Moods:</strong> {quote.mood_categories.join(', ')}</p>
      <p><strong>Topics:</strong> {quote.topic_categories.join(', ')}</p>
      <button onClick={() => deleteQuote(quote.id)}>Delete</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default AdminDashboard;
