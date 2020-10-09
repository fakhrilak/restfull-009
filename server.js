require('dotenv').config();
const express = require('express');
const router = require('./routes');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api/ts-009', router);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));