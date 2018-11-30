// npm i mysql request
// 然后node执行
'use strict';

var password = '';
var port = '';
var msger = ''; // 消息接受者 为空则不发消息
// 先执行 npm i mysql

var mysql = require('mysql');

var request = require('request');

mysql && console.log('mysql加载成功...');
var args = process.argv.splice(2);
console.log('密码:' + password);
var option = {
  host: 'localhost',
  user: 'root',
  password: password || '',
  port: port || '3306',
  database: 'mysql'
};
var connection = mysql.createConnection(option);
connection.connect();
console.log('mysql连接' + connection.state);
var selectUsers = "select distinct concat(\"'\", user, \"'\", \"@\", \"'\", host, \"'\") as user from mysql.user";
var userList = [];
var grants = '';
var output = '';
connection.query(selectUsers, function (error, results, fields) {
  if (error) {
    console.log('查询出错');
    throw error;
  }

  ;
  userList = results.map(function (i) {
    return i.user;
  });
  var L = userList.length;
  userList.forEach(function (user) {
    var sql = "show grants for ".concat(user);
    var connectionI = mysql.createConnection(option);
    connectionI.query(sql, function (error, results, fields) {
      if (error) {
        console.log('查询权限出错');
        throw error;
      }

      var key = Object.keys(results[0])[0];
      grants += "".concat(key, "\n");
      results.forEach(function (rowI) {
        var str = "".concat(rowI[key], "\n");
        grants += str;
      });
      L--;

      if (L <= 0) {
        output += '数据库审计\n';
        output += "\n";
        output += '1.当前数据库的用户\n';
        output += userList.join('\n');
        output += "\n\n";
        output += '2.当前数据库的用户权限\n';
        output += grants;
        console.log(output);
        var msgUrl = "http://im.2980.com:8088/sendmsg?digitids=".concat(msger, "&content=").concat(encodeURIComponent(output));
        msger && request(msgUrl);
      }
    });
    connectionI.end();
  });
});
connection.end();