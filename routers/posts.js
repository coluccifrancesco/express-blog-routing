// Creare un file di routing (routers/posts.js) che conterrà 
// le rotte necessario per l'entità post.

const express = require('express');
const router = express.Router();

// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione 
// che il server deve eseguire, secondo le convenzioni REST.

// get - index
router.get(('/'), (req, res) => {

    // Bonus:
    // Restituire la lista dei post dalla rotta index in formato json
    let postsArr = require('../data/posts');
    const jsonConv = JSON.stringify(postsArr);
    console.log(jsonConv);
    
    res.send(`Welcome to the Blog! This is our post list: ${jsonConv}`);

})


// get - show
router.get(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    // Bonus:
    // Restituire un singolo post dalla rotta show in formato json
    let postsArr = require('../data/posts');
    let jsonConv = JSON.stringify(postsArr[id - 1]);
    console.log(jsonConv);
    
    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`);
    } else {
        res.send(`You requested the post with slug: ${id}. Your post: ${jsonConv}`);
    }
    
})


// post - store
router.post(('/'), (req, res) => {

    const idGenerator = Math.floor(Math.random() * (999 - 5 + 1) + 5);
    console.log(idGenerator);

    res.send(`You posted! Your slug is: ${idGenerator}`)

})


// put - update
router.put(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`)
    } else {
        res.send(`You updated the post with slug: ${id}`)
    }

})


// patch - modify
router.patch(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`)
    } else {
        res.send(`You modified the data of post with slug: ${id}`)
    }

})


// delete - destroy
router.delete(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`)
    } else {
        res.send(`You deleted post with slug: ${id}`)
    }

})


module.exports = router;