function getTriangleArea(base = 10, height = 5) {
    return base * height / 2;
}

console.log(getTriangleArea()); //結果：25(base/height双方を省略)
console.log(getTriangleArea(4));    //結果：10(heightだけを省略)
console.log(getTriangleArea(1, 2)); //結果：1(省略なし)
console.log(getTriangleArea(5, null))   //結果：0
console.log(getTriangleArea(5, undefined))   //結果：12.5