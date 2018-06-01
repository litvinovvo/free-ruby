const str = process.argv[1]

const v = [];
const c = [];
const d = [];

str.split("").forEach(char => {
    if (/[aeiou]/i.test(char)) v.push(char);
    if (/[bcdfghjklmnpqrstvwxyz]/i.test(char)) c.push(char);
    if (/[\d]/i.test(char)) d.push(char);
});

const res = [];
if(v.length > 0)res.push(v.join(""))
if(c.length > 0)res.push(c.join(""))
if(d.length > 0)res.push(d.join(""))

process.stdout.write(res.join(" "));
