let list1 = [undefined];
console.log(0 in list1);    //結果：true

let list2 =[];
list2[1] = 15;
console.log(0 in list2);    //結果：false