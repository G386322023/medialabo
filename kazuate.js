// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
b = document.querySelector('button#print');
b.addEventListener('click', hantei); 

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let a = document.querySelector('input[name="kazuate"]');
  kazu = a.value;  ///入力された結果
  let seisu_kazu = Number(kazu);  ///整数にする
  let yoso = seisu_kazu;

// 課題3-1: 正解判定する
  kaisu = kaisu+1;


  //変数 kaisu の値を要素 span#kaisu のテキストに設定
  let p = document.querySelector('span#kaisu');    
  p.textContent = kaisu;

  
  //yoso の値を要素 span#answer のテキストに設定する
  let c = document.querySelector('span#answer');
  c.textContent = yoso;

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

