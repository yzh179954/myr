var express = require('express');
var router = express.Router();
var sqlUtil=require('../utils/MysqlUtil')

//获取会员列表
router.get('/', function(req, res, next) {
  if(typeof(req.query.keyword)!="undefined"){
    //不获取记录总数
    sql='select * from vip where phone='+req.query.keyword;
    sqlUtil.getResult(sql,function(result){
        // console.log(result[0].id);
       return res.render('vips',{title:"会员列表",result:result,pages:0});
    })
  }
  //获取记录总数
  var limit=1;
  var offset= (typeof(req.query.page)!="undefined")? (parseInt(req.query.page)-1)*limit:0;
  var sql='select count(id) as count from vip';
  sqlUtil.getResult(sql,function(result){
    var pages=(result[0].count%limit==0)? parseInt(result[0].count/limit):parseInt(result[0].count/limit)+1;
    sql='select * from vip limit '+limit+' offset '+offset;
    sqlUtil.getResult(sql,function(result){
      return res.render('vips',{title:"会员列表",result:result,pages:pages,page:offset/limit+1});
    })
  })
});



//添加会员
router.post('/new',function(req,res,next){
  var sql='select id from vip where phone='+req.body.phone;
  sqlUtil.getResult(sql,function(result){
    if(result.length==0){
      var phone = req.body.phone;
      var mount=req.body.mount;
      var create_time=new Date().toLocaleString();
      sql='insert into vip(phone,mount,create_time) values("'+phone+'",'+mount+',"'+create_time+'")';
      console.log(sql);
      sqlUtil.getResult(sql,function(result){
        // console.log(result);
      })
    }
    res.redirect("/vip");
  })
})

router.get("/del/:id",function(req,res,next){
  var sql='delete from vip where id='+req.params.id;
  console.log(sql);
  sqlUtil.getResult(sql,function(result){
    res.redirect("/vip");
  })
})

router.get("/:phone",function(req,res,next){
  var sql='select * from vip where phone='+req.params.phone;
  sqlUtil.getResult(sql,function(result){
    res.contentType('json');
    res.send(JSON.stringify(result));
    res.end();
  })
})

module.exports = router;
