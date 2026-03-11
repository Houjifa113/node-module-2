const express = require('express')
const app = express();
const axios = require('axios');

const PORT = 8000;

app.get('/fetch-fastapi', async (req, res) => {
  try {
    const response = await axios.get('http://127.0.0.1:8000');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});