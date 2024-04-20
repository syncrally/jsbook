let books = [
    ['ゼロからわかるTypeScript入門', '技術評論社'],
    ['これからはじめるVue.js 3 実践入門', 'SB クリエイティブ'],
    ['Bootstrap 5 フロントエンド開発の教科書', '技術評論社']
];

for (let [title, publisher] of books) {
    console.log(`${title} ${publisher} 刊行`);
}