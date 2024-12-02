let list = [10, 20, 30, 20, 50];

console.log(list.indexOf(20));          //結果：1
console.log(list.indexOf(60));          //結果：-1
console.log(list.lastIndexOf(20));      //結果：3
console.log(list.indexOf('20'));        //結果：-1
console.log(list.indexOf(20, 2));       //結果：3
console.log(list.lastIndexOf(20, 2));   //結果：1
console.log(list.indexOf(20, -2));      //結果：3