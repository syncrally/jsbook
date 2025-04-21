let getTriangleArea = new Function(
    'base',
    'height',
    'return base * height / 2;'
);

console.log(getTriangleArea(10, 4));    //結果：20