let list = ['い', 'ろ', 'は', 'に', 'い', 'へ', 'と'];  //検索対象の配列
let keywd = 'い'; //検索する要素
let result = [];    //結果配列

list.forEach(function(v, i){
    //合致する要素があれば、そのインデックス値を結果に追加
    if(v === keywd)
        {result.push(i);
        }
    });

console.log(result);    //結果：[0,4]