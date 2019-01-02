var express = require('express');
var router = express.Router();
var URL = require('url');
//加载mysql模块
var mysql = require('mysql');
//创建连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sys'
});
//执行创建连接 
connection.connect();
//SQL语句

var  addSql = 'INSERT INTO user(name,password) VALUES(?,?)';

router.post('/', function(req, res, next) {
    //解析请求参数
    var  sql = 'SELECT * FROM user WHERE name = "'+ req.body.name +'"';
    var addSqlParams = [req.body.name, req.body.password];
    //增
    connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }             
    });
    
    //查
    connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }        
        //把搜索值输出
       res.send(result);
    });
});

module.exports = router;