var cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Server Listening to Port 8081");
});

const userRoutes = require('./src/routes/chatweb.routes');

app.use('/backend/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});