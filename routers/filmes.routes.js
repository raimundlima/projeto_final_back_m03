const express = require('express');
const router = express.Router();
const Filme = require('../models/filmes');

router.post("/add", async (req, res) => {
    // if(Controller(req.header.key)){
        await Filme.create(req.body)
        .then(() => {
            res.status(200).send("Filme adicionado com sucesso");
        }).catch((err) => {
            res.status(400).send("Algo errado com o filme, tente novamente");
            console.error(err);
        })
    // }else{
    //     res.status(403).end();
    // }
});

router.get('/', async (req, res) => {
    await Filme.find({})
    .then((filme) => {
        res.status(200).send(filme);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com o filme, tente novamente");
        console.log(err);
    })
});

router.get('/findById/:id', async (req, res) => {
    await Filme.find({_id : req.params.id})
    .then((filme) => {
        res.status(200).send(filme);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com o filme, tente novamente");
        console.log(err);
    })
});

router.get('/findByName/:name', async (req, res) => {
    await Filme.find({nome : req.params.name})
    .then((filme) => {
        res.status(200).send(filme);
    })
    .catch((err) => {
        res.status(400).send("Algo errado com o filme, tente novamente");
        console.log(err);
    })
    
});

router.put("/update/:id", async (req, res) => {
    await Filme.updateOne({_id : req.params.id},req.body)
    .then(() => {
        res.status(200).send("Atualizado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com o filme, tente novamente");
        console.log(err);
    });
});

router.delete("/delete/:id", async (req, res) => {
    await Filme.deleteOne({_id : req.params.id})
    .then(() => {
        res.status(200).send("Deletado com sucesso");
    })
    .catch((err) => {
        res.status(400).send("Algo errado com o filme, tente novamente");
        console.log(err);
    });
});


module.exports = router;