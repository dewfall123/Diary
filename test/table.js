const fs = require('fs');
const promisify = require('util').promisify;
const path = require('path');

fs.stat = promisify(fs.stat);
fs.exists = promisify(fs.exists);
fs.readdir = promisify(fs.readdir);

const exclude = ['node_modules', '.git', '.vscode', 'log', 'public'];

// 递归读取
const rootpath = process.argv[2] || process.cwd();
console.log(rootpath);
async function readDir(rootpath, table) {

    const fileArr = await fs.readdir(rootpath);
    const dirPromises = [];
    for (let file of fileArr) {
        if (exclude.includes(file)) {
            continue;
        }
        let fileStat;
        try {
            fileStat = await fs.stat(path.join(rootpath, file));
        } catch (err) {
            continue;
        }
        if (fileStat.isDirectory()) {
            table[file] = {};
            dirPromises.push(readDir(path.join(rootpath, file), table[file]));
        } else {
            table[file] = file;
        }
    }
    await Promise.all(dirPromises);
    return table;
}

// 目录可视化
function showDir (name = '目录', dir, depLength = 0) {
    let space = '\u2502   '.repeat(Math.max(0, (depLength - 1)))  + '\u251c\u2500\u2500\u2500';
    console.log(`${space}${name}`);
    space = '\u2502   '.repeat((depLength)) + '\u251c\u2500\u2500\u2500';
    let count = 0;
    for (let file in dir) {
        if (typeof dir[file] === 'string' || !Object.keys(dir[file]).length) {
            let line = `${space}${file}`;
            if (++count === Object.keys(dir).length) {
                line = line.split('');
                line[(depLength) * 4] = '\u2514';
                line = line.join('');
            }
            console.log(line);
        } else {
            showDir(file, dir[file], depLength + 1);
        }
    }
}

(async () => {
    const result = await readDir(rootpath, {});
    // console.log(result);

    let reading = setInterval(() => {
        console.log('.');
    }, 1000);
    await showDir('diary', result);
    clearInterval(reading);
})();
