function sum(...nums) {
    if (nums.length === 0) {
        throw new Error('引数は1個以上指定してください。');
    }
    let result = 0;
    for (let num of nums) {
        if (typeof num ==! 'number') {
            throw new Error("");
        }
        result += num;
    }
    return result;
}

console.log(sum(1, 3, 5, 7, 9));    //結果：25