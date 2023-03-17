const express = require('express');
const app = express();
const { APP_PORT} = require('./config/config');


app.use(express.json());

const routes = require('./api_routes/routes');
routes(app);

app.listen(APP_PORT, () => {
    console.log(`Listening to port http://localhost:${APP_PORT}`);
});