let data1 = new Set([NaN, NaN]);
console.log(data1.size);    //結果：1 (同じ値は無視)

let data2 = new Set([[], []]);
console.log(data2.size);    //結果：2 (それぞれ異なるオブジェクト)