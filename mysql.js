'use strict';


const mysql = require('mysql');
mysql && console.log('mysql加载成功...');
const args = process.argv.splice(2);
console.log('密码:' + args[0]);

const option = {
    host: 'localhost',
    user: 'root',
    password: args[0] || '2017!@#QAZWSX',
    port: args[1] || '3306',
    database: 'mysql',
};

const connection = mysql.createConnection(option);
connection.connect();
console.log('mysql连接' + connection.state); 

const selectUsers = `select distinct concat("'", user, "'", "@", "'", host, "'") as user from mysql.user`;
let userList = [];
let grants = '';
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
            let str = `${key}\n${results[0][key]}\n`;
            grants += str;
            L--;
            if (L <= 0) {
                console.log(`\n\n`);
                console.log(userList.join('\n'));
                console.log(`\n`);
                console.log(grants);
            }
        });
        connectionI.end();
    });
});

connection.end();
