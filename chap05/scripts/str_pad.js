let str = '123.45';

console.log(str.padStart(10));              //結果：    123.45
console.log(str.padStart(10, '0'));         //結果：0000123.45
console.log(str.padEnd(10, '0'));           //結果：123.450000
console.log(str.padStart(10, 'xyz'));       //結果：xyzx123.45
console.log(str.padStart(10, 'abcdef'));    //結果：abcd123.45
console.log(str.padStart(3));               //結果：123.45