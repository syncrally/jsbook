let list = [1, 2, 3, 4, 5];

console.log(list.flatMap(function (value) {
    return [value * 2, value ** 2];
})
);  //結果：[2, 1, 4, 4, 6, 9, 8, 16, 10, 25]