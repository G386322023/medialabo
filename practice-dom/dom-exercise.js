//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let p1 = document.querySelector('h2#ex42');  //要素検索
let a = document.createElement('p'); //p要素作成
a.textContent = '写真表と都市の緯度経度のページです';//P要素のテキスト設定
a.style.textEmphasis='sesame green';//CSS設定
p1.insertAdjacentElement('afterend', a);//h2要素の次にp要素を追加

// 練習4-3 写真表作成プログラム
//一回目
let p2 = document.querySelector('div#phototable');  //要素検索
let b = document.createElement('p'); //p要素作成
let c = document.createElement('img'); //img要素作成
c.setAttribute('src', 'taro.png');//img要素のsrc属性を設定
b.insertAdjacentElement('afterend', c);//p要素の中にimg要素を追加


// 練習4-4 箇条書き削除プログラム


// 練習4-5 箇条書き追加プログラム

