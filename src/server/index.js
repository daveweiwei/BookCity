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
    passowrd: Number,
    userstate: Number
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
  //获取post方法里的值，是一个对象
  let user = req.body;
  //判断post方法传的值如果有一个为空，就不允许保存数据
  let oState = false;
  oState = Object.values(user).every(itme => itme != '')
  if (oState) {
    user.userstate = 1;
    usersModel.create(user, function (error, doc) {
      if (error) {
        console.log(error);
      } else {
        //res.cookie('encounter',user.username);
        res.send({result: 0})
      }
    });
  } else {
    res.send({result: 1})//如果有为空的字段，那么就返回1，保存失败
  }
}

app.post('/api/users', addUsers);

