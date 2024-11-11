let dt = new Date(2022, 11, 15, 20, 40);
console.log(dt);                //結果：Thu Dec 15 2022 20:40:00 GMT+0900(日本標準時)
dt.setMonth(dt.getMonth() + 3); //3ヶ月を加算
console.log(dt);                //結果：Wed Mar 15 2023 20:40:00 GMT+0900(日本標準時)
dt.setDate(dt.getDate() - 20);  //20日を減算
console.log(dt);                //結果：Thu Feb 23 2023 20:40:00 GMT+0900(日本標準時)