const express = require('express');

const router = express.Router();

//carrega o Book model
const Book = require (`../../models/Book`);

//GET api/books/test
//rotas para testar livros 

router.get(`/test`, (req, res) => {res.send(`Testando rota book`)
    });

//GET api/books
//pegar todos os livros

router.get (`/`, (req, res) => {
    Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json ({nobooksfound: `Nenhum livro encontrado`}));
});

//GET api/books/:id
//pegar unico livro por id

router.get(`/:id`, (req, res) =>{
Book.findById(req.params.id)
.then(book => res.json(book))
.catch(err => res.status(404).json({nobooksfound: `Nenhum livro encontrado`}));
})

//POST api/books
//adicionar/salvar livro

router.post(`/`, (req, res) =>{
    Book.create(req.body)
    .then(book => res.json({msg: `Livro adicionado com sucesso`}))
    .catch(err => res.status(400).json({error: `Não foi possível adicionar este livro`}));
    })

//PUT api/books/:id
//atualizar livro

router.put(`/:id`, (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({msg: `Atualizado com sucesso`}))
    .catch(err => res.status(400).json({nobooksfound: `Não foi possível atualizar a base de dados`}));
    })

    //DELETE api/books/:id
    //deletar livros por id 

    router.delete(`/:id`, (req, res) =>{
        Book.findByIdAndDelete(req.params.id, req.body)
        .then(book => res.json({msg: `Livro deletado com sucesso`}))
        .catch(err => res.status(400).json({nobooksfound: `Não existe esse livro`}));
        })

        module.exports = router;
