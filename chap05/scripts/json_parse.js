//``で囲まれた文字列
let data = `{
    "isbn": "978-4-297-12635-3",
    "title": "TyoeScript入門",
    "price": "2948"
}`;

let obj = JSON.parse(data);
console.log(obj);