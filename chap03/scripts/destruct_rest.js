let data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, ...other] = data;
console.log(x0);    //結果：56
console.log(x1);    //結果：40
console.log(x2);    //結果：26
console.log(other); //結果：[82,19,17,73,99]