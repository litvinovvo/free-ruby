const args = process.argv;
const str = args.slice(2).join(" ");

const res = [];

if(str.match(/[aeiou]/ig))res.push(str.match(/[aeiou]/ig).join(""))
if(str.match(/[bcdfghjklmnpqrstvwxyz]/ig))res.push(str.match(/[bcdfghjklmnpqrstvwxyz]/ig).join(""))
if(str.match(/[\d]/ig))res.push(str.match(/[\d]/ig).join(""))

process.stdout.write(res.join(" "));
