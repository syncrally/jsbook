(function () {
    var scope = 'Hoge';
    console.log(scope); //結果：Hoge
}).call(this);

console.log(scope); //変数scopeはスコープ外なのでエラー