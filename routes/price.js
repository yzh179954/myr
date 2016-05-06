var express = require('express');
var router = express.Router();
var sqlUtil=require('../utils/MysqlUtil')

// 获取列表
router.get('/',function(req,res,next){
  var sql='select * from price '
  sqlUtil.getResult(sql,function(result){
    res.render('price',{title:'价格管理',result:result});
  })
})

router.get('/ajax',function(req,res,next){
  var sql='select * from price '
  sqlUtil.getResult(sql,function(result){
    res.contentType('json');
    res.send(JSON.stringify(result));
    res.end();
  })
})

//添加时间价格
router.post('/new',function(req,res,next){
  var timearea=req.body.begin_time+"--"+req.body.end_time;
  var price=req.body.price;
  var sql='insert into price(timearea,price) values("'+timearea+'","'+price+'")';
  sqlUtil.getResult(sql,function(result){
    res.redirect('/price');
  })
})

//删除时间价格
router.get('/del/:id',function(req,res,next){
  var sql='delete from price where id='+req.params.id;
  sqlUtil.getResult(sql,function(result){
    res.redirect('/price');
  })
})

module.exports = router;
