let data = new Map();
data.set('1st', 'ファースト');
data.set('2nd', 'セカンド');
data.set('3rd', 'サード');

for (let key of data.keys()) {
    console.log(key);   //結果：1st、2nd、3rd
}

for (let value of data.values()) {
    console.log(value); //結果：ファースト、セカンド、サード
}

for (let [key, value] of data.entries()) {
    console.log(`${key}:${value}`)  //結果：1st:ファースト、2nd:セカンド、3rd:サード
}