// Creare un file di routing (routers/posts.js) che conterrà 
// le rotte necessario per l'entità post.

const express = require('express');
const postsArr = require('../data/posts.js');
const router = express.Router();

// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione 
// che il server deve eseguire, secondo le convenzioni REST.

// get
router.get(('/'), (req, res) => {
    
    res.send('Welcome to the Blog! This is our post list');

})

router.get(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`)
    } else {
        res.send(`You requested the post with slug: ${id}`)
    }
    
})


// post
router.post(('/'), (req, res) => {

    const idGenerator = Math.floor(Math.random() * (999 - 5 + 1) + 5);
    console.log(idGenerator);

    res.send(`You posted! Your slug is: ${idGenerator}`)

})


// put
router.put(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`)
    } else {
        res.send(`You added data at the post with slug: ${id}`)
    }

})


// patch
router.patch(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`)
    } else {
        res.send(`You modified the data of post with slug: ${id}`)
    }

})


// delete
router.delete(('/:id'), (req, res) => {

    const id = req.params.id;
    console.log(id);

    if(id > 5){
        res.send(`The post with slug "${id}" does not exist`)
    } else {
        res.send(`You deleted post with slug: ${id}`)
    }

})


// Bonus
// Provare a restituire la lista dei post dalla rotta index, in formato json
// Provare a restituire un singolo post dalla rotta show, sempre in formato json

module.exports = router;