let dat = new Date(2022, 4, 15, 11, 40);
console.log(dat);       //結果：Sun May 15 2022 11:40:00 GMT+0900(日本標準時)
dat.setMonth(dat.getMonth() + 1);   //来月の...
dat.setDate(0);         //0日目をセット
console.log(dat);       //結果：Tue May 31 2022 11:40:00 GMT+0900(日本標準時)