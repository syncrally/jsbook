let book = {
    title: 'Javaポケットリファレンス',
    publisher: '技術評論社',
};

let {title: subject, publisher: company} = book;
console.log(company); //結果：Javaポケットリファレンス
console.log(subject); //結果：技術評論社