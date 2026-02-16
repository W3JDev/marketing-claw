const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'marketing-claw',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Mr. J Marketing - AI Chief Marketing Officer @W3J',
    service: 'marketing-claw',
    version: '1.0.0',
    status: 'operational'
  });
});

app.listen(port, () => {
  console.log(`Marketing Claw service running on port ${port}`);
});