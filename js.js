const fs = require('fs'), path = require('path'), filePath = path.join(__dirname, 'in.csv');

const count = (a,b) => {
    let k=0;
    for (let i=0;i<a.length;i++) {
        for (let j=0;j<b.length;j++) {
            if (a[i]===b[j]) {
                k=k+1;
            }
        }
    }
    return k;
};

let raw = fs.readFileSync(filePath,'utf8');
raw = raw.split('\n').map(a=> a.split(',').map(b=> parseInt(b,10))).reverse().slice(1);
let l=raw.length;
let calc=[];
for (let i=0;i<l;i++) {
    calc.push(raw.map(a => count(raw[i],a)));
}
console.log(calc[0]);

