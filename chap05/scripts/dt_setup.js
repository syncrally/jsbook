let d = new Date(2022, 11, 4, 20, 7, 15, 368);
console.log(d);  //結果：Sun Dec 04 2022 20:07:15 GMT+0900（日本標準時）

let d2 = new Date(2022, 11, 32, 20, 7, 15, 368);
console.log(d2); //結果：Sun Jan 01 2023 20:07:15 GMT+0900（日本標準時）

let d3 = new Date(2022, 11, 0);
console.log(d3); //結果：Wed Nov 30 2022 00:00:00 GMT+0900（日本標準時）

let d4 = new Date(2022, 11);
console.log(d4); //結果：Thu Dec 01 2022 00:00:00 GMT+0900（日本標準時）