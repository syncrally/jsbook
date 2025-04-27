function checkScope() {
    let x = y = 13;
}

checkScope();
console.log(y); //結果：13(グローバルスコープでアクセスできる)