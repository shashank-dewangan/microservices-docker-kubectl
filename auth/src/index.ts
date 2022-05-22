import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/getUser', (req, res) => {
  res.send('<h1>Hello</h1>');
});
app.listen(3000, () => {
  console.log('Listening on port 3000!!');
});
