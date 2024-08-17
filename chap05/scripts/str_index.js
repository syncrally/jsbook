let str = 'にわにはにわにわとりがいる';

console.log(str.indexOf('にわ'));           //結果：0
console.log(str.lastIndexOf('にわ'));       //結果：6
console.log(str.indexOf('にど'));           //結果：-1
console.log(str.indexOf('にわ',5));         //結果：6
console.log(str.lastIndexOf('とり',7));     //結果：-1
console.log(str.indexOf('',5));            //結果：5
console.log(str.indexOf('とり',-5));        //結果：8
console.log(str.lastIndexOf('にわ',-5));    //結果：0
console.log(str.indexOf('にわ',15));        //結果：-1
console.log(str.lastIndexOf('にわ',15));    //結果：6