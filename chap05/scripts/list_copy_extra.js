let list1 = [1, 2, 3, 4, 5];
let list2 = [6, 7, 8, 9, 10];
let list3 = [11, 12, 13, 14, 15];

let copy1 = [...list1];
let copy2 = list2.slice();
let copy3 = list3.concat();

console.log(copy1);
console.log(copy2);
console.log(copy3);