window.scope = 'var global';
let scope = 'let global';

console.log(scope); //結果：let global
console.log(window.scope);  //結果：var global