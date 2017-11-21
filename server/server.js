const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// Serve up assets from publicPath
app.use(express.static(publicPath));

// If request is not in /public serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Listen at port 3000
app.listen(port, () => {
  console.log('Server running on port: ', port);
});