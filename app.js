const chalk = require('chalk');
const express = require('express');
const postsArr = require('./data/posts.js');

const app = express();
const port = 3000;

const postRouter = require('./routers/posts.js')

console.log(postsArr);


// Registrare il router dentro app.js con il prefisso posts/.
app.use("/posts", postRouter)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})