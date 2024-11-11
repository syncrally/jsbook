let dt1 = new Date(2022, 10, 15);   //2022/11/15
let dt2 = new Date(2022, 11, 20);   //2022/12/20
let diff = (dt2.getTime() - dt1.getTime()) / (1000 * 60 * 60 * 24);
console.log(`${diff}日の差があります。`)    //結果：35日の差があります。