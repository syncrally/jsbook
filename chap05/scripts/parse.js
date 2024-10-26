let n = '123xxx';
console.log(Number(n));                     //結果：NaN
console.log(Number.parseFloat(n));          //結果：123
console.log(Number.parseInt(n));            //結果：123

let d = new Date();
console.log(Number(d));                     //結果：Dateオブジェクトを経過ミリ秒に換算した値
console.log(Number.parseFloat(d));          //結果：NaN
console.log(Number.parseInt(d));            //結果：NaN

let h = '0x10';
console.log(Number(h));                     //結果：16
console.log(Number.parseFloat(h));          //結果：0
console.log(Number.parseInt(h));            //結果：16

let b = '0b11';
console.log(Number(b));                     //結果：3
console.log(Number.parseFloat(b));          //結果：0
console.log(Number.parseInt(b));            //結果：0
console.log(Number.parseInt('0b11', 2));    //結果：0 (解析できない)
console.log(Number.parseInt('11', 2));      //結果：3 (解析できる)

let e = '1.01e+2';
console.log(Number(e));                     //結果：101
console.log(Number.parseFloat(e));          //結果：101
console.log(Number.parseInt(e));            //結果：1