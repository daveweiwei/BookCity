let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');

let mongoose = require('mongoose');

let app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(3000);

let conn = mongoose.createConnection('mongodb://localhost:27017/imooc');
let presonSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bookname: String,
  bookimgs: String,
  author: String,
  visitor: String
},
{
  collection: 'book'
});

let userInfo = new mongoose.Schema({
  username: String,
  showname: String,
  passowrd: Number
},
{
  collection: 'users'
});

let booksModel = conn.model('book', presonSchema);
let usersModel = conn.model('users', userInfo);

function pullBookslist(req, res) {

  booksModel.find({}, function (error, docs) {
    if (error) {
      console.log(error)
    } else {
      res.send(docs)
    }
  })
}

app.get('/api/books', pullBookslist);

function addUsers(req, res) {
  let user = req.body;
  console.log(user)
  usersModel.create(user, function(error,doc){
    if(error) {
      console.log(error);
    } else {
      console.log(doc);
    }
  });
  res.send('ok');
}

app.post('/api/users', addUsers);

