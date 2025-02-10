let re = /[0-9]{3}-[0-9]{4}/g;
let str1 = '郵便番号は111-0500です。';
let str2 = '住所は東京都東京市東京町1-1-1です。';
console.log(str1.search(re)); //結果：true
console.log(str2.search(re)); //結果：false