const AMERICA = 1 << 0; //0001
const RUSSIA = 1 << 1;  //0010
const CHINA = 1 << 2;   //0100
const INDIA = 1 << 3;   //1000

let flags = AMERICA | CHINA;
console.log(flags & INDIA); //結果：0(INDIAは無効)