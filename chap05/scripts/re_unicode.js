let msg = 'WINGSでは執筆メンバーを絶賛募集中です！';

console.log(msg.match(/[\p{sc=Hiragana}]+/gu)); //結果：['では', 'を', 'です']
console.log(msg.match(/[\p{sc=Katakana}]+/gu)); //結果：['メンバー']
console.log(msg.match(/[\p{sc=Han}]+/gu)); //結果：['執筆', '絶賛募集中']