const request = require('request');
const url = `https://zfhzzl.com.cn/public/dist/0.8ec8057f793941e58a46.chunk.js`;

request(url, {
    headers: {
        'Cache-control': 'no-store',
    }
}, (err, res, body) => {
    console.log(res.headers["cache-control"]);
})