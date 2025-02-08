let data = new Set();
data.add('壱')
    .add('弐')
    .add('参')
    .add('壱');

console.log(data);  //結果：Set {'壱', '弐', '参'}
console.log(data.delete('弐')); //結果：true
console.log(data.delete('肆')); //結果：false
console.log(data);  //結果：Set {'壱', '参'}
data.clear();
console.log(data);  //結果：Set {size:0}