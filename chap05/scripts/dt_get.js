let dt = new Date(2022, 11, 4, 20, 7, 15, 368);
console.log(dt);                        //結果：Sun Dec 04 2022 20:07:15 GMT+0900（日本標準時）
console.log(dt.getFullYear());          //結果：2022(年)
console.log(dt.getMonth());             //結果：11(月、0〜11)
console.log(dt.getDate());              //結果：4(日)
console.log(dt.getDay());               //結果：0(曜日。0：日曜〜6：土曜)
console.log(dt.getHours());             //結果：20(時間)
console.log(dt.getMinutes());           //結果：7(分)
console.log(dt.getSeconds());           //結果：15(秒)
console.log(dt.getMilliseconds());      //結果：368(ミリ秒)
console.log(dt.getTime());              //結果：1670184435000(タイムスタンプ値)
console.log(dt.getTimezoneOffset());    //結果：-540(協定世界時からの時差)