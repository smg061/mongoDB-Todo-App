const express = require('express');
const path = require('path');
const app = express();
const routes = require('./controllers');
const PORT = 3001 || process.env.PORT;

app.use(express.static(path.join(__dirname, 'public' )));
app.use(express.json());
app.use(express.urlencoded({}));
app.use(routes);


app.listen(PORT, () => {
    console.log("Server listening");
})