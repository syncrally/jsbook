let list = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];

console.log(list.slice(3, 6));      //結果：['に', 'ほ', 'へ']
console.log(list.slice(3));         //結果：['に', 'ほ', 'へ', 'と']
console.log(list.slice());          //結果：['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と']
console.log(list.slice(-3, 6));     //結果：['ほ', 'へ']
console.log(list.slice(3, -1));     //結果：['に', 'ほ', 'へ']
console.log(list.slice(7, 10));     //結果：[]
console.log(list.slice(3, 1));      //結果：[]