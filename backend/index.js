const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('A Beautiful Second Mind');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 