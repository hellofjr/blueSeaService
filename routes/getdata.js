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
    database : 'test'
});
//执行创建连接 
connection.connect();
//SQL语句

router.get('/', function(req, res, next) {
    //解析请求参数
    var params = URL.parse(req.url, true).query;
    var sql = "SELECT * FROM students WHERE name = '" + params.name + "'";
    //查
    connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',sql);
          return;
        }        
        //把搜索值输出
       res.send(result);
    });
});

module.exports = router;