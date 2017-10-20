let oMongo = require('../mongodb');

//首页书的列表
exports.pullBookslist = function (req, res) {
  oMongo.booksModel.find({}, function (error, docs) {
    if (error) {
      console.log(error)
    } else {
      res.send(docs)
    }
  })
};
//注册
exports.addUsers = function (req, res) {
  //获取post方法里的值，是一个对象
  let user = req.body;
  //判断是否注册过
  let promise = new Promise(function (resolve, reject) {
    let olduser = null;
    oMongo.usersModel.find({username: user.username}, function (error, doc) {
      if (error) {
        console.log('error', error)
      } else {
        if (doc[0].username === user.username) {
          olduser = false;
          resolve(olduser)
        } else {
          olduser = true;
          resolve(olduser)
        }
      }
    });
  });
  promise.then(item => {
    if (item) {
      //判断post方法传的值如果有一个为空，就不允许保存数据
      let oState = false;
      oState = Object.values(user).every(itme => itme != '');
      if (oState) {
        oMongo.usersModel.create(user, function (error, doc) {
          if (error) {
            console.log(error);
          } else {
            res.send({result: 0})
          }
        });
      } else {
        res.send({result: 1})//如果有为空的字段，那么就返回1，保存失败
      }
    } else {
      res.send({result: '已注册'})
    }
  }).catch(error => console.log('发生错误！', error))
};
//登陆
exports.login = function (req, res) {
  let user = req.body;
  oMongo.usersModel.find({username: user.username}, function (error, docs) {
    if (error) {
      console.log(error);
    } else {
      if (docs[0]['username'] != user.username) {
        res.send({username: false})
      } else if (docs[0]['passowrd'] != parseInt(user.password)) {
        res.send({passowrd: false})
      } else {
        res.send({result: 0, userInfolist: docs})
      }
    }
  })
};

