    const express = require('express');

    var app = express();

    
    app.use((req, res, next) => {
        if (+new Date() % 2 === 0) {
            console.log('continue');
            res.send('lucky!');
            next();
        } else {
            console.log('failed');
            res.send('end');
        }
    });
    app.use('/', (req, res, next) =>{
        res.send('hello');
        return;
    });


    app.listen(3000, () => console.log(`Example!`))