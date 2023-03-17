const express = require('express');
const app = express();
const dotenv = require('dotenv');

app.use(express.json());

dotenv.config();

const routes = require('./api_routes/routes');
routes(app);
const port = process.env.APP_PORT || 0000;

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});