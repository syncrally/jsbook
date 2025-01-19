let list = [10, 42, null, 73, 8];

list.some(function (value) {
    if (value === null) {
        return true;
    }
    console.log(value);
}); //結果：10, 42