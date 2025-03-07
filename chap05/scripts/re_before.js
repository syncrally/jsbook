//文字列strを正規表現regで検索した結果を表示する関数
function showResult(str, reg) {
    let results = str.matchAll(reg);
    for (let result of results) {
        console.log(result[0]);
    }
    console.log('----------');
}

let re1 = /あい(?=うえ)/g;  //「うえ」が後に続く「あい」
let re2 = /あい(?!うえ)/g;  //「うえ」が後に続かない「あい」
let re3 = /(?<=。)あい/g;   //「。」が直前にある「あい」
let re4 = /(?<!。)あい/g;   //「。」が直前にない「あい」
let str1 = 'あいうえおかきくけこ';
let str2 = 'あいすべきサルですね。あいあいは';

showResult(str1, re1);  //結果：あい
showResult(str2, re1);  //結果：(なし)
showResult(str1, re2);  //結果：(なし)
showResult(str2, re2);  //結果：あい、あい、あい
showResult(str1, re3);  //結果：(なし)
showResult(str2, re3);  //結果：あい
showResult(str1, re4);  //結果：あい
showResult(str2, re4);  //結果：あい、あい