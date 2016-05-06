function GetDateDiff(startTime, endTime, diffType) {
//将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
startTime = startTime.replace(/\-/g, "/");
endTime = endTime.replace(/\-/g, "/");
//将计算间隔类性字符转换为小写
diffType = diffType.toLowerCase();
var sTime = new Date(startTime); //开始时间
var eTime = new Date(endTime); //结束时间
//作为除数的数字
var divNum = 1;
switch (diffType) {
case "second":
divNum = 1000;
break;
case "minute":
divNum = 1000 * 60;
break;
case "hour":
divNum = 1000 * 3600;
break;
case "day":
divNum = 1000 * 3600 * 24;
break;
default:
break;
}
return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum));
}
//格式时间工具
Date.prototype.format = function (format) {
   var args = {
       "M+": this.getMonth() + 1,
       "d+": this.getDate(),
       "h+": this.getHours(),
       "m+": this.getMinutes(),
       "s+": this.getSeconds(),
       "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
       "S": this.getMilliseconds()
   };
   if (/(y+)/.test(format))
       format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
   for (var i in args) {
       var n = args[i];
       if (new RegExp("(" + i + ")").test(format))
           format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
   }
   return format;
};
