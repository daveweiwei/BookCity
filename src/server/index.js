let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');
let oMethod = require('./router-model');

let app = express();
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

app.listen(3000);


//首页书的列表
app.get('/api/books', oMethod.pullBookslist);
//注册
app.post('/api/users', oMethod.addUsers);
//登陆
app.post('/api/login', oMethod.login);
