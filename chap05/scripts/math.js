console.log(Math.abs(-100));    //結果：100
console.log(Math.clz32(1)); //結果：31
console.log(Math.min(20, 40, 60));  //結果：20
console.log(Math.max(20, 40, 60));  //結果：60
console.log(Math.pow(5, 3));   //結果：125
console.log(Math.random());   //結果：実行都度に異なる
console.log(Math.sign(-100));   //結果：-1
console.log(Math.ceil(1234.56));   //結果：1235
console.log(Math.ceil(-1234.56));   //結果：-1234
console.log(Math.floor(1234.56));   //結果：1234
console.log(Math.floor(-1234.56));   //結果：-1235
console.log(Math.round(1234.56));   //結果：1235
console.log(Math.round(-1234.56));   //結果：-1235
console.log(Math.trunc(1234.56));   //結果：1234
console.log(Math.trunc(-1234.56));   //結果：-1234
console.log(Math.sqrt(81));   //結果：9
console.log(Math.cbrt(81));   //結果：4.326748710922225
console.log(Math.hypot(3, 4));   //結果：5
console.log(Math.cos(1));   //結果：0.5403023058681398
console.log(Math.sin(1));   //結果：0.8414709848078965
console.log(Math.tan(1));   //結果：1.5574077246549023
console.log(Math.atan2(1, 3));   //結果：0.3217505543966422
console.log(Math.log(10));   //結果：2.302585092994046
console.log(Math.exp(3));   //結果：20.085536923187668
console.log(Math.expm1(1));   //結果：1.718281828459045

let min = 50;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //結果：任意の数

console.log(Math.floor(Math.random() * 101));   //結果：任意の数

let list = ['みかん', 'りんご', 'ぶどう', 'すいか', 'なし'];
console.log(list[Math.floor(Math.random() * list.length)]); //結果：任意の要素