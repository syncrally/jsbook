let value = [1, 2, 4, 8, 16];

function updateArray(value) {
    //末尾の要素を削除
    value.pop();
    return value;
}

console.log(updateArray(value));    //結果：[1,2,4,8]
console.log(value); //結果：[1,2,4,8]