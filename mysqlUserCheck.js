// npm i mysql request
// 然后node执行

'use strict';
const password = '';
const port = '';
const msger = ''; // 消息接受者 为空则不发消息

// 先执行 npm i mysql
const mysql = require('mysql');
const request = require('request');
mysql && console.log('mysql加载成功...');
const args = process.argv.splice(2);
console.log('密码:' + password);

const option = {
    host: 'localhost',
    user: 'root',
    password: password || '',
    port: port || '3306',
    database: 'mysql',
};

const connection = mysql.createConnection(option);
connection.connect();
console.log('mysql连接' + connection.state); 

const selectUsers = `select distinct concat("'", user, "'", "@", "'", host, "'") as user from mysql.user`;
let userList = [];
let grants = '';
let output = '';
connection.query(selectUsers, function (error, results, fields) {
    if (error) {
        console.log('查询出错');
        throw error;
    };
    userList = results.map(i => i.user);

    let L = userList.length;
    userList.forEach(user => {
        const sql = `show grants for ${user}`;
        let connectionI = mysql.createConnection(option);
        connectionI.query(sql, function (error, results, fields) {
            if (error) {
                console.log('查询权限出错');
                throw error;
            }
            
            let key = Object.keys(results[0])[0];
            grants += `${key}\n`;
            results.forEach(rowI => {
                let str = `${rowI[key]}\n`;
                grants += str;
            });
            L--;
            if (L <= 0) {
                output += ('数据库审计\n');
                output += (`\n`);
                output += ('1.当前数据库的用户\n');
                output += (userList.join('\n'));
                output += (`\n\n`);
                output += ('2.当前数据库的用户权限\n');
                output += (grants);
                console.log(output);

                const msgUrl = `http://im.2980.com:8088/sendmsg?digitids=${msger}&content=${encodeURIComponent(output)}`;
                msger && request(msgUrl);
            }
        });
        connectionI.end();
    });
});

connection.end();
