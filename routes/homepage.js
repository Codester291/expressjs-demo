/*eslint-disable new-cap */
const express = require('express');
const routes = express.Router();
routes.get('/', (req, res) => {
    //eslint-disable-next-line sort-keys
    res.render('index', {title: "My app", message: "new message"});
});
module.exports = routes;