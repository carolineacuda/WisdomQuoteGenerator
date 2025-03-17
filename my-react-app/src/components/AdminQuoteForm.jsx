// src/components/AdminQuoteForm.jsx
import React, { useState } from 'react';
import Select from 'react-select';

// Example moods (you can import or define this in a shared file)
const moodsOptions = [
  { value: 'Anxious', label: 'Anxious' },
  { value: 'Worried', label: 'Worried' },
  { value: 'Stressed', label: 'Stressed' },
  { value: 'Helpless', label: 'Helpless' },
  { value: 'Unfairness', label: 'Unfairness' },
  { value: 'Burdened', label: 'Burdened' },
  // ... add any other moods
];

const AdminQuoteForm = ({ onSubmit, initialData = {} }) => {
  const [source, setSource] = useState(initialData.source || '');
  const [quote, setQuote] = useState(initialData.quote || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [selectedMoods, setSelectedMoods] = useState(
    initialData.mood_categories
      ? moodsOptions.filter(option => initialData.mood_categories.includes(option.value))
      : []
  );
  const [topics, setTopics] = useState(
    initialData.topic_categories ? initialData.topic_categories.join(', ') : ''
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert selected options into an array of mood strings.
    const moods = selectedMoods.map(option => option.value);
    // Split topics by comma and trim extra spaces.
    const topicsArray = topics.split(',').map(t => t.trim()).filter(t => t);
    // Prepare the quote object to send to the backend.
    const quoteData = { source, quote, description, mood_categories: moods, topic_categories: topicsArray };
    onSubmit(quoteData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Source:</label>
        <input 
          type="text" 
          value={source} 
          onChange={(e) => setSource(e.target.value)} 
        />
      </div>
      <div>
        <label>Quote:</label>
        <textarea 
          value={quote} 
          onChange={(e) => setQuote(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Moods:</label>
        <Select
          options={moodsOptions}
          isMulti
          value={selectedMoods}
          onChange={setSelectedMoods}
          placeholder="Select one or more moods..."
        />
      </div>
      <div>
        <label>Topics (comma separated):</label>
        <input 
          type="text" 
          value={topics} 
          onChange={(e) => setTopics(e.target.value)} 
        />
      </div>
      <button type="submit">Save Quote</button>
    </form>
  );
};

export default AdminQuoteForm;
