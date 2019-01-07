/**
 * 创建数据库连接
 */
let baseConfig = require("./baseConfig");
let mysql = require('mysql')
let pool = mysql.createPool({
    'host': baseConfig.host,
    'port': baseConfig.port,
    'user': baseConfig.user,
    'password': baseConfig.password,
    'database': baseConfig.database,
    'charset': baseConfig.charset,
    'connectionLimit': baseConfig.maxConnectLimt,
    'supportBigNumbers': true,
    'bigNumberStrings': true
})
//释放连接
let release=function(connection){
    connection.release(function(error){
        if(error){
            console.log('释放数据库连接失败')
        }else{
            console.log('释放数据库连接成功')
        }
    })
}

//数据库执行sql
let execSql = function(sql,args,handler){
    //获取查询参数
    this.execQuery=function(){
        pool.getConnection(function(error,connection){
            if(error){
                console.log("数据库连接异常！")
                throw error;
            }
            //执行查询
            if(!args){
                let query = connection.query(sql,function(error , result){
                    if(error){
                        console.log('数据库查询操作异常：sql='+sql)
                        throw error;
                    }
                    handler(error ,result);
                    console.log("执行sql："+query.sql)
                })

            }else{
                let query = connection.query(sql,args,function(error ,result){
                    if(error){
                        console.log('数据库查询操作异常：sql='+sql)
                        throw  error;
                    }
                    handler(error,result)
                })
                console.log("执行sql:"+query.sql)
            }
            console.log('释放连接')
            connection.release()
        })

    }
}

module.exports=execSql