let list1 = [1, 2, 3, 4, 5];
let list2 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
];

//配列を複製
let copy1 = Array.from(list1);
let copy2 = Array.from(list2);

//元の配列を修正
list1[0] = 999;
list2[0][0] = 777;

console.log(list1); //結果：[999, 2, 3, 4, 5]
console.log(copy1); //結果：[1, 2, 3, 4, 5]
console.log(list2); //結果：[777, 20, 30],[40, 50, 60],[70, 80, 90]
console.log(copy2); //結果：[777, 20, 30],[40, 50, 60],[70, 80, 90]