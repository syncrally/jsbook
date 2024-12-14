let list = ['い', 'ろ', 'は', 'に', 'い', 'へ', 'と'];

console.log(list.includes('い'));       //結果：true
console.log(list.includes('ほ'));       //結果：false
console.log(list.includes('い' , 3));   //結果：true
console.log(list.includes('ろ', -3));   //結果：false