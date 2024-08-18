let str = 'うりうりがうりうりにきてうりうりのこし';

console.log(str.includes('うり'));      //結果：true
console.log(str.startsWith('うり'));    //結果：true
console.log(str.endsWith('うり'));      //結果：false
console.log(str.includes('うり', 10));  //結果：true
console.log(str.startsWith('うり', 3)); //結果：false
console.log(str.endsWith('うり', 2));   //結果：true