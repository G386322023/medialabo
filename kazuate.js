// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  yoso = 4;

  // 課題3-1: 正解判定する
  kaisu = kaisu+1;

  console.log(kaisu + '回目の予想：'+ yoso);

  if(yoso == kotae || kaisu >= 4){
    console.log('答えは　' + kotae + '　でした。すでにゲームは終わっています。');
  }else if(yoso == kotae){
    console.log(' 正解です。おめでとう！');
  }else if(kaisu == 3){
    console.log(' まちがい。残念でした答えは　' + kotae + '　です。');
  }else if(yoso < kotae){
    console.log(' まちがい。答えはもっと大きいですよ。');
  }else if(yoso > kotae){
    console.log(' まちがい。答えはもっと小さいですよ。');
  }

  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}

//予想のメッセージ「◯回目の予想: △」を console.log() ではなく HTML に出力
let p1 = document.querySelector('span#kaisu');			// span#kaisu 要素を検索
p1.textContent = kaisu;	

let p2 = document.querySelector('span#answer');			// span#answer 要素を検索
p2.textContent = yoso;	

let p3 = document.querySelector('p#result');			// p#result 要素を検索
p3.textContent = '答えは　' + kotae + '　でした。すでにゲームは終わっています。';	