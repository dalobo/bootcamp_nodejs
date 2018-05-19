const express = require("express");
const port = 3000;
const consign = require('consign');
const app = express();

consign()
    .include('routes')
    .into(app);

app.listen(port, () => {
    console.log(`Bootcamp API - port ${port}`);
});