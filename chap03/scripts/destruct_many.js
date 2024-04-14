let data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3] = data;
let [y0, y1, y2, y3, y4, y5, y6, y7, y8] = data;
let [,,,,,,z6, z7] = data;

console.log(x0);    //結果：56
console.log(x1);    //結果：40
console.log(x2);    //結果：26
console.log(x3);    //結果：82
console.log(y0);
console.log(y1);
console.log(y2);
console.log(y3);
console.log(y4);
console.log(y5);
console.log(y6);
console.log(y7);
console.log(y8);    //結果：undefined
console.log(z6);    //結果：73
console.log(z7);    //結果：99