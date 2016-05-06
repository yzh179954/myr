var express = require('express');
var router = express.Router();
var sqlUtil=require('../utils/MysqlUtil');
var xlsx = require('node-xlsx');
var fs = require('fs');

// 获取列表
router.get('/',function(req,res,next){
  var begin_time=(typeof(req.query.begin_time)!="undefined")? req.query.begin_time:'2010-01-01 00:00:00';
  var end_time=(typeof(req.query.end_time)!="undefined")? req.query.end_time:new Date().toLocaleString();
  var limit=10;
  var offset= (typeof(req.query.page)!="undefined")? (parseInt(req.query.page)-1)*limit:0;
  var sql='select * from consume where begin_time BETWEEN "'+begin_time+'" and "'+ end_time+'"';
  var phone=null;
  if(typeof(req.query.phone)!="undefined"&&req.query.phone!=null&&req.query.phone!=""){
    sql+=' and phone='+req.query.phone;
    phone=req.query.phone;
  }
  console.log(sql);
  sqlUtil.getResult(sql,function(result){
    var pages=(result.length%limit==0)? parseInt(result.length/limit):parseInt(result.length/limit)+1;
    sql+=' limit '+ limit+' offset '+offset;
    console.log(sql);
    sqlUtil.getResult(sql,function(result){
      res.render('consume',{title:'消费记录列表',result:result,pages:pages,page:offset/limit+1,begin_time:begin_time,end_time:end_time,phone:phone})
    })
  })
})

//导出时间段内消费记录到execl
router.get('/execl',function(req,res,next){
  var begin_time=(typeof(req.query.begin_time)!="undefined")? req.query.begin_time:'2010-01-01 00:00:00';
  var end_time=(typeof(req.query.end_time)!="undefined")? req.query.end_time:new Date().toLocaleString();
  var sql='select * from consume where begin_time BETWEEN "'+begin_time+'" and "'+ end_time+'"';
  if(typeof(req.query.phone)!="undefined"){
    sql+=' and phone='+req.query.phone;
  }
  sqlUtil.getResult(sql,function(result){
    //构造execl数据
    var data=new Array();
    data[0]=['序号','手机号','消费金额','观影开始时间','观影结束时间']
    for(var  i=0;i<result.length;i++){
      data[i+1]=new Array(result[i].id,result[i].phone,result[i].mount,result[i].begin_time.toLocaleString(),result[i].end_time.toLocaleString());
    }
    var name="消费记录表";
    console.log(data);
    // data = [[1,2,3],[true, false, null, 'sheetjs'],['foo','bar',new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
    var filename=encodeURI(new Date().toLocaleString()+'消费记录.xlsx');
    var buffer = xlsx.build([{name: name, data: data}]);
    fs.writeFileSync('b.xlsx', buffer, 'binary');
    var result=fs.readFileSync('b.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment;filename="+filename);
    res.end(result, 'binary');
    fs.unlinkSync('b.xlsx');
  })

})

module.exports = router;
