const http2 = require('http2');

const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync('../1698962_www.zfhzzl.com.cn.key'),
    cert: fs.readFileSync('../1698962_www.zfhzzl.com.cn.pem')
});
server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
    // stream is a Duplex
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });
    stream.end(`<!DOCTYPE html>
        <body>
            1
            <script></script>
        <body>
    `);
    stream.pushStream({ ':path': '/' }, (err, pushStream, headers) => {
        if (err) throw err;
        pushStream.respond({ ':status': 200 });
        pushStream.end('some pushed data');
    });
});

server.listen(8443, 'localhost');
console.log('服务启动成功');