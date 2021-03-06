const path = require('path');
const express = require('express');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;

// app.use(express.static(publicPath));
app.use('/', expressStaticGzip(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log('server is up');
  /* eslint-enable */
});
