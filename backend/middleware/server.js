const express = require('express');
const app = express();

const start = port => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("public"));

    app.listen(port, () => {
        console.log(`Server connected to port ${port}.`);
    });
}

module.exports = {
    start,
    app
}