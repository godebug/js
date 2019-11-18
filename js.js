const fs = require('fs'), path = require('path'),
    inPath = path.join(__dirname, 'in.csv'),
    outPath = path.join(__dirname, 'out.json');

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
let f= fs.createWriteStream(outPath);
f.write(JSON.stringify(calc));

