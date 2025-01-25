let data = new Map();
data.set('壱', '1')
    .set('弐', '2')
    .set('参', '3')
    .set('壱', '一');

console.log(data.get('参'));    //結果：3
console.log(data.get('壱'));    //結果：一
console.log(data.get('肆'));    //結果：undefined