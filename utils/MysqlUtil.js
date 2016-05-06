
var mysql = require('mysql');
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password:'123',
  port:'3306',
  database:'myr'
});
var getResult=function(sql,callback){
  pool.getConnection(function(err,connection){
    connection.query(sql,function(err,result){
      console.log(result);
      callback(result);
      connection.release();
    })
  })
}
exports.getResult=getResult;
