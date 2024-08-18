let str = '　 WINGSプロジェクト \n\t\n';

console.log(`「${str.trim()}」`);       //結果：「WINGSプロジェクト」
console.log(`「${str.trimStart()}」`);  //結果：「WINGSプロジェクト \n\t\n'」
console.log(`「${str.trimEnd()}」`);    //結果：「　 WINGSプロジェクト」