function greeting() {           ///イベントが発生した時に，コンソールに「こんにちは」を出力する
    let i = document.querySelector('input[name="shimei"]');
    shimei = i.value;
    aisatsu='こんにちは,'+shimei+'さん';
    let p = document.querySelector('p#message');
    p.textContent = aisatsu;
  }
 ///表示ボタン」にイベントハンドラ greeting() を登録します
  b = document.querySelector('button#print');  ///id が "print" のボタンを検索し，結果を変数 b に代入
  b.addEventListener('click', greeting);       ///ボタン b のクリックイベントのハンドラとして greeting を登録