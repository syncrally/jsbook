let re = /<a href="mailto:(.+?)">\1<\/a>/;
let msg = 'お問い合わせは<a href="mailto:admin@example.com">admin@example.com</a>まで！';
console.log(msg.match(re)[0]);
    //結果：<a href="mailto:admin@example.com">admin@example.com</a>