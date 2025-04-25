let param = 'height, width';
let formula = 'return height * width / 2;';
let diamond = new Function(param, formula);

console.log(diamond(5, 2)); //結果：5