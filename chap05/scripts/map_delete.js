let data = new Map();
data.set('1st', 'ファースト');
data.set('2nd', 'セカンド');
console.log(data.delete('1st'));    //結果：true
console.log(data.delete('3rd'));    //結果：false