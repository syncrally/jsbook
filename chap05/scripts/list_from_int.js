let list = Array.from(
    {length: 5 },
    function(value, index){
        return index * 10;
    }
);

console.log(list);  //結果：[0, 10, 20, 30, 40]