let mongoose = require('mongoose');

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
    userinfo: Array
  },
  {
    collection: 'users'
  });

let booksModel = conn.model('book', presonSchema);
let usersModel = conn.model('users', userInfo);

module.exports = {
  booksModel,
  usersModel
};
