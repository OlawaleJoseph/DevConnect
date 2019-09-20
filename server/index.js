import express from 'express';
import dotenv from 'dotenv';
import connectDb from './db';

dotenv.config();
const app = express();

connectDb();
app.get('/', (req, res) => {
  res.send('API STARTED');
});

const PORT = process.env.PORT || 9900;
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
