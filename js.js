const fs = require('fs'), path = require('path'),
    inPath = path.join(__dirname, 'in.csv'),
    outPath = path.join(__dirname, 'in.js');

const count = (a,b) => {
    let k=0;
    for (let i=0;i<a.length;i++) {
        if (b.includes(a[i])) {
            k=k+1;
        }
    }
    return k;
};

let raw = fs.readFileSync(inPath,'utf8');
raw = raw.split('\n').map(a=> a.split(',').map(b=> parseInt(b,10))).reverse().slice(1,200);
let l=raw.length;
let calc=[];
for (let i=0;i<l;i++) {
    let row = {d:raw[i], m:[]};
    for (let k=i+1;k<l;k++) {
        row.m.push(count(raw[i],raw[k]));
    }
    calc.push(row);
}

let stat = new Map();
for (let i=0;i<l;i++) {
    calc[i].m.forEach( c => stat.set(c, stat.has(c) ? stat.get(c) + 1: 1))
}

console.log(stat);
let f= fs.createWriteStream(outPath);
f.write('export const data ='+JSON.stringify(calc));

