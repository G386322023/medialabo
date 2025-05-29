let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);


// 通信を開始する処理
function sendRequest() {
	// URL を設定
	let url = 'https://www.nishita-lab.org/web-contents/jsons/test.json';

	// 通信開始
	axios.get(url)  //データをとる
		.then(showResult)   //通信が成功した時
		.catch(showError)   //通信が失敗した時
		.then(finish);   //通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}

	// data をコンソールに出力
	console.log(data);

	// data.x を出力
	console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}
