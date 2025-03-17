// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Configure your PostgreSQL connection (adjust env variables accordingly)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

// Endpoint: Get a random quote based on mood category
app.get('/quotes/random', async (req, res) => {
  const mood = req.query.mood;
  if (!mood) {
    return res.status(400).json({ error: 'Please provide a mood query parameter.' });
  }
  try {
    // Use PostgreSQL array operator to check if mood is in mood_categories
    const result = await pool.query(
      'SELECT * FROM quotes WHERE $1 = ANY(mood_categories) ORDER BY random() LIMIT 1',
      [mood]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No quote found for the specified mood.' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint: Get quotes filtered by topic category or all quotes if no topic provided
// In your server.js or routes file
app.get('/quotes', async (req, res) => {
  const page = parseInt(req.query.page) || 1;    // current page (default to 1)
  const limit = parseInt(req.query.limit) || 10;   // quotes per page (default to 10)
  const offset = (page - 1) * limit;
  
  try {
    // For simplicity, this example doesn't include filtering by topic.
    // You could add additional query conditions if needed.
    const result = await pool.query(
      'SELECT * FROM quotes ORDER BY id LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});



//console.log('Database URL:', process.env.DATABASE_URL);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
