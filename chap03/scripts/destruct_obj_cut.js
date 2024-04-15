let book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社',
    price: 2680,
};

let price, title, memo;
({price, title, memo = 'x'} = book);
console.log(price); //結果：2680
console.log(title); //結果：Javaポケットリファレンス
console.log(memo);  //結果：x