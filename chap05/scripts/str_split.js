let str = 'みかん\tりんご\tぶどう\t';
let str2 = '叱られて';

console.log(str.split('\t'));       //結果：[ 'みかん', 'りんご', 'ぶどう', '' ]
console.log(str.split('\n'));       //結果：[ 'みかん\tりんご\tぶどう\t']
console.log(str.split());           //結果：['みかん\tりんご\tぶどう\t']
console.log(str2.split(''));        //結果：['\uD842', '\uDF9F', 'ら', 'れ', 'て']
console.log(str.split('\t', 2));    //結果：['みかん', 'りんご']
console.log(str.split('\t', 0));    //結果：[ '' ]
console.log(str.split('\t', -1));   //結果：['みかん', 'りんご', 'ぶどう', '']