let books = [
    {title: 'TypeScript入門', price: 2948},
    {title: 'Bootstrapの教科書', price: 3828},
    {title: 'はじめてのAndroidアプリ開発', price: 3520},
    {title: '基礎から学ぶC#の教科書', price: 3190},
    {title: 'これからはじめるVue.js', price: 3740},
];

console.log(books.find(function (value) {
    return value.title.startsWith('Bootstrap');
}));    //結果：{title: 'Bootstrapの教科書', price: 3828}