import express from 'express';
import path from 'path';
import debug from 'debug';
import { config } from 'dotenv';

const port = process.env.PORT || 8000;
const app = express();
const debugged = debug('app');
config();

app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

app.listen(port, () => {
  debugged(`Listening from port ${port}`);
});
