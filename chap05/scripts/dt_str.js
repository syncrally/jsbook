let d = new Date('2022-12-04T20:07:15');
console.log(d);  //結果：Sun Dec 04 2022 20:07:15 GMT+0900（日本標準時）

let d2 = new Date('2022/12/04 20:07:15');
console.log(d2); //結果：Sun Dec 04 2022 20:07:15 GMT+0900（日本標準時）

let d3 = new Date('December 4 2022 20:07:15');
console.log(d3); //結果：Sun Dec 04 2022 20:07:15 GMT+0900（日本標準時）