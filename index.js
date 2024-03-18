const express = require('express');
const urlRoute = require('./routes/url');
const {connectToMongoDB} = require('./connect');
const app = express();
const PORT = 8000;
connectToMongoDB('mongodb://localhost:27017/shorturl')
.then(()=>console.log('MongoDB connected'));
app.use('/url',urlRoute);
app.listen(PORT, () => console.log(`Server Started at PORT http://localhost:${PORT}`));