let scope = 'Global Scope';

function getValue() {
    let scope = 'Block Scope';
    return scope;
}

console.log(getValue());    //結果：Block Scope
console.log(scope); //結果：Global Scope