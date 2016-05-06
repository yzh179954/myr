var express = require('express');
var router = express.Router();
var sqlUtil=require('../utils/MysqlUtil')

// 获取房间列表
router.get('/',function(req,res,next){
  var sql='select * from room ';
  sqlUtil.getResult(sql,function(result){
    res.render('rooms',{title:"包厢房间列表",result:result})
  })
})

//添加房间
router.post('/new',function(req,res,next){
  var sql='insert into  room(name,des) values("'+req.body.name+'","'+req.body.des+'")';
  console.log(sql);
  sqlUtil.getResult(sql,function(result){
    res.redirect('/room');
  })
})

//开房修改房间信息
router.get('/put/:id',function(req,res,next){
  var time=new Date().toLocaleString();
  var sql='update room set status=1 ,begin_time="'+time+'" where id='+req.params.id;
  console.log(sql);
  sqlUtil.getResult(sql,function(result){
    res.redirect('/room');
  })
})

//删除房间信息
router.get('/del/:id',function(req,res,next){
  var sql='delete from room where id='+req.params.id;
  console.log(sql);
  sqlUtil.getResult(sql,function(result){
    res.redirect('/room');
  })
})

//普通结账
router.get('/pay/:id',function(req,res,next){
  // 更新房间状态信息
 var sql='update room set status=0,begin_time=" " where id='+req.params.id;
 sqlUtil.getResult(sql,function(result){
  //  插入一条记录
   var mount=req.query.mount;
   var begin_time=req.query.begin_time;
   var end_time=new Date().toLocaleString();
   sql='insert into consume(mount,begin_time,end_time) values("'+mount+'","'+begin_time+'","'+end_time+'")';
   sqlUtil.getResult(sql,function(result){
     res.redirect('/room');
   })
 })
})


//会员结账
router.get('/pay/:id/vip',function(req,res,next){
  var sql='update room set status=0,begin_time=" " where id='+req.params.id;
  sqlUtil.getResult(sql,function(result){
    //会员余额扣款
    var mount=req.query.balance;
    var phone=req.query.phone;
    sql='update vip set mount ='+mount+' where phone='+phone;
    sqlUtil.getResult(sql,function(result){
      // 添加消费记录
      var begin_time=req.query.begin_time;
      var end_time=new Date().toLocaleString();
      mount=req.query.mount;
      sql='insert into consume(phone,mount,begin_time,end_time) values("'+phone+'","'+mount+'","'+begin_time+'","'+end_time+'")';
      sqlUtil.getResult(sql,function(result){
        res.redirect('/room');
      })
    })
  })
})

module.exports = router;
