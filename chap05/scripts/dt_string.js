let dt = new Date(2022, 11, 4, 20, 7, 15, 368);
console.log(dt.toLocaleString());       //結果：2022/12/4 20:07:15
console.log(dt.toLocaleDateString());   //結果：2022/12/4
console.log(dt.toLocaleTimeString());   //結果：20:07:15
console.log(dt.toISOString());          //結果：2022-12-4T20:07:15.368Z
console.log(dt.toDateString());         //結果：Sun Dec 04 2022
console.log(dt.toJSON());               //結果：2022-12-4T20:07:15.368Z