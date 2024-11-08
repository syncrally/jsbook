let min = 50;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //結果：任意の数

console.log(Math.floor(Math.random() * 101));   //結果：任意の数

let list = ['みかん', 'りんご', 'ぶどう', 'すいか', 'なし'];
console.log(list[Math.floor(Math.random() * list.length)]); //結果：任意の要素

/* ChatGPTによる解説

Math.random()だけでは範囲を指定した整数の値を取得することはできない。

Math.random()の結果に、(max - min + 1)を掛けている。
これによって、生成される乱数の範囲が0から(max - min + 1)未満になる。
たとえば、minが5でmaxが10の場合、(max - min + 1)は6になるので、
生成される数の範囲は0から6未満（つまり0～5.999...）になる。

Math.floor()は、小数点以下を切り捨てて整数にする関数。
このコードでは、小数点以下を切り捨てることで、0からmax - minまでの整数を生成している。
たとえば、先ほどの例だと0から5までの整数が生成される。

最後に、minを足すことで、生成された整数の範囲をminからmaxまでに調整している。
例えば、minが5、maxが10の場合、
Math.floor(Math.random() * (max - min + 1))は0から5の範囲の整数を返し、
それにmin（5）を加えることで、最終的に5から10の範囲の整数が得られる。

array.lengthは配列の長さを取得する。
配列の長さとは配列の要素数で、上の例だと5。

*/