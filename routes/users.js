let express = require('express');
let router = express.Router();
let execSql = require('./mysql');
//hash模块
let crypto = require('crypto');

/** Check user exist */
router.get('/userValid', function (req, res, next) {
  //解析请求参数
  let params = req.query;
  let name = params.name;
  let sql = "SELECT * FROM user WHERE name = '" + name + "' ";
  //查
  let query = new execSql(sql, null, function (error, result) {
    if (error) {
      console.log("查询失败:" + error)
      return;
    }
    res.send({
      items: result,
      er: -1
    });
  })
  query.execQuery();
});

/** Add user */
router.post('/add', function (req, res, next) {
  let addSql = 'INSERT INTO user(name,password) VALUES(?,?)';
  let name = req.body.name;
  let password = req.body.password;
  //解析请求参数
  let selectSql = 'SELECT * FROM user WHERE name = "' + name + '"';
  //加密密码
  let md5 = crypto.createHash('md5');//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
  md5.update(password);
  password = md5.digest('hex');
  let addSqlParams = [name, password];
  let addQuery = new execSql(addSql, addSqlParams, function (error, result) {
    if (error) {
      console.log("添加失败:" + error)
      return;
    }
    checkQuery.execQuery();
  })

  // 先查
  let checkQuery = new execSql(selectSql, null, function (error, result) {
    if (error) {
      console.log("查询失败:" + error)
      return;
    }
    if (result && result.length == 0) {
      addQuery.execQuery();
    } else {
      res.send({
        items: result,
        er: -1
      });
    }
  })
  checkQuery.execQuery();
});

/** Delete user */
router.get('/delete', function (req, res, next) {

  //解析请求参数
  let params = req.query;
  let name = params.name;
  let delSql = "DELETE FROM user WHERE name= '" + name + "'";

  let delQuery = new execSql(delSql, null, function (error, result) {
    if (error) {
      console.log("删除失败:" + error)
      return;
    }
    res.send({
      er: -1
    });
  });
  delQuery.execQuery();
});

/** Edit user */
router.post('/edit', function(req, res, next) {
  //解析请求参数
  let name = req.body.name;
  let password = req.body.password;
  //加密密码
  let md5 = crypto.createHash('md5');//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
  md5.update(password);
  password = md5.digest('hex');
  let editSql = "UPDATE user SET password = '"+ password + "' WHERE name = '" + name + "'";

  let editQuery = new execSql(editSql,null,function(error, result){
    if (error) {
      console.log("编辑失败:" + error)
      return;
    }
    res.send({
      er: -1
    });
  });
  editQuery.execQuery();
});

module.exports = router;
