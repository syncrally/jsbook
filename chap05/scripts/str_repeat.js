let str = 'ハム';

console.log(str.repeat(5));     //結果：ハムハムハムハムハム
console.log(str.repeat(0));     //結果：(空文字列)
console.log(str.repeat(3.5));   //結果：ハムハムハム
console.log(str.repeat(-5));    //結果：エラー(Invalid count value)