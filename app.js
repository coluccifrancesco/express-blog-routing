const chalk = require('chalk');
const express = require('express');
const postsArr = require('./data/posts.js');

const app = express();
const port = 3000;

const postRouter = require(router);

console.log(chalk, express, postsArr, app, port);

app.get('/', (req, res) => {
    res.send('Welcome to the Express Blog!');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})