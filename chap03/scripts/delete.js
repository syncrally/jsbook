let data = ['Python', 'PHP', 'JapaScript'];
console.log(delete data[0]);            //結果：true
console.log(data);                      //結果：[なし, 'PHP', 'JapaScript']
console.log(data.length);               //結果：3

let langs = {primary: 'Japanese', secondary: 'English'};
console.log(delete langs.secondary);    //結果：true
console.log(langs);                     //結果：{primary: 'Japanese'}
console.log(delete langs.hoge);         //結果：true

let member = {name: '山田太郎', sex:'male', language: langs};
console.log(delete member.language);    //結果：true
console.log(member);                    //結果：{name: '山田太郎', sex:'male'}
console.log(langs);                     //結果：{primary: 'Japanese'}

let title = 'Vue.js本格入門';
console.log(delete title);              //結果：false

author = '鈴木次郎'
console.log(delete author);             //結果：true