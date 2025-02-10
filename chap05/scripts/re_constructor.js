let org = /[0-9]{3}-[0-9]{4}/g;
copy = new RegExp(org, 'i');
console.log(copy);  //結果：/[0-9]{3}-[0-9]{4}/g (オプションが変更された)