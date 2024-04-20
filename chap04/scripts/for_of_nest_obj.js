let books = [
    {
    isbn: '978-4-297-12635-3',
    title: 'ゼロからわかるTypeScript入門',
    publisher: '技術評論社'
    },
    {
    isbn: '978-4-8156-1336-5',
    title: 'これからはじめるVue.js 3 実践入門',
    publisher: 'SB クリエイティブ'
    },
    {
    title: 'Bootstrap 5 フロントエンド開発の教科書',
    publisher: '技術評論社'
    }
];

for (let {title, publisher} of books) {
    console.log(`${title} ${publisher} 刊行`);
}