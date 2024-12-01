let list1 = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];
let list2 = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];
let list3 = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];
let list4 = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];

console.log(list1.splice(3, 2, 'X', 'Y', 'Z'));  //結果：['に','ほ']
console.log(list1);                              //結果：['い','ろ','は','X','Y','Z','へ','と']

console.log(list2.splice(3, 0, 'X', 'Y', 'Z'));  //結果：[]
console.log(list2);                              //結果：['い','ろ','は','X','Y','Z','に','ほ','へ','と']

console.log(list3.splice(3, 2));                 //結果：['に','ほ']
console.log(list3);                              //結果：['い','ろ','は','へ','と']

console.log(list4.splice(3));                    //結果：['に','ほ','へ','と']
console.log(list4);                              //結果：['い','ろ','は']