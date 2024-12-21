let list = [1, 2, 3, 4, 5]
let copy = Array.from(list);

console.log(copy);  //結果：[1, 2, 3, 4, 5]
console.log(list === copy); //結果：false