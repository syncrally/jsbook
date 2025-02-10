let re = /[0-9]{3}-[0-9]{4}/g;
let str1 = '郵便番号は111-0500です。';
let str2 = '住所は東京都東京市東京町1-1-1です。';
console.log(re.test(str1)); //結果：true
console.log(re.test(str2)); //結果：false