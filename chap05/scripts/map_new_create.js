let keys = [1, 2, 3];
let values = ['あ', 'い', 'う'];

let data = new Map(
    keys.map(function (value, index) {
        return [value, values[index]];
    })
);

console.log(data);  //結果：{1 => 'あ', 2 => 'い', 3 => 'う'}