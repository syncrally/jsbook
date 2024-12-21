let opts = Array.from(document.querySelector('#food').options);
opts.forEach(function(opt){
    console.log(opt.value);
}); //結果：ラーメン、餃子、焼き肉