const express = require('express')
const app = express();
const {connectToDb,getDb }  = require('./db');
const { ObjectId } = require('mongodb');

let db;

app.use(express.json())

connectToDb((err)=>{
    if(!err)
    {
        app.listen(4000,()=>{
            console.log("Database has been created");
        }) 
        db = getDb()
    }
});
app.get("/books",(req,res)=>{

    const page = req.query.p || 0
    const bookPerPage = 3;
    let books = [];

    db.collection('books')
    .find()
    .sort({author:1})
    .skip(page * bookPerPage)
    .limit(bookPerPage)
    .forEach(book => books.push(book))
    .then(() =>{
        res.status(200).json(books)
    })
    .catch(() => {
        res.status(500).json({error:'Could not fetch the document'})
    })
})
app.get("/book/:id",(req,res)=>{
    let bookId = new ObjectId(req.params.id)
    db.collection('books')
    .findOne({_id:bookId})
    .then(doc =>
        {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json({error:'Could not fetch the document'})
    })
})
app.delete('/book/:id',(req,res)=>{
    const book = new ObjectId(req.params.id)
    db.collection('books')
    .deleteOne({_id:book})
    .then(result =>{
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json({error:'Could not delete the document'})
    })
})
app.post('/books',(req,res) =>{
    const book = req.body;
    db.collection('books')
    .insertOne(book)
    .then(result =>{
        res.status(200).json(result)
    })
    .catch(err =>{
        res.status(500).json({error: "Can not be add data"})
    })
})
app.patch('/book/:id',(req,res) =>{
    const book = new ObjectId(req.params.id)
    const update = req.body;
    db.collection('books')
    .updateOne({_id:book},{$set:update})
    .then(result => {
        res.status(200).json(result);
    }).catch(err =>{
        res.json(500).json({err:'You can not be update data'})
    })
})

