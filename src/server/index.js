let express = require('express');
var cors = require('cors')
let fs = require('fs');
let path = require('path');
let mongoose = require('mongoose');

let app = express();
app.use(cors());


let conn = mongoose.createConnection('mongodb://localhost:27017/imooc');
let presonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookname: String,
  bookimgs: String,
  author: String,
  visitor: String
},{
  collection:'book'
});

let booksModel = conn.model('book', presonSchema);


function pullBookslist(req, res) {
  booksModel.find({},function (error, docs) {
    if (error) {
      console.log(error)
    } else {
      res.send(docs)
    }
  })
}

app.get('/api/books', pullBookslist);
app.listen(3000)
