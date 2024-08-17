let str = 'にわにはにわにわとりがいる';//検索対象の文字列
let count = 0;//ヒットした個数
let keywd = 'にわ';//検索文字列
let pos = str.indexOf(keywd);//検索開始位置
//マッチ文字列がなくなったらループを終了
while (pos !== -1) {
    count++;
    //前回のマッチ位置から検索を再開
    pos = str.indexOf(keywd, pos + keywd.length);
}
console.log(`${count}件がヒットしました。`);//結果：3件がヒットしました。