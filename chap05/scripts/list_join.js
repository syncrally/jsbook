let list = ['松', '竹', '梅'];
console.log(list.join());       //結果：松,竹,梅
console.log(list.join('／'));   //結果：松／竹／梅
console.log(list.join('\t'));   //結果：松  竹  梅
console.log(list.join(''));     //結果：松竹梅

let list2 = ['hoge', null, undefined, []];
console.log(list2.join());      //結果：hoge,,,