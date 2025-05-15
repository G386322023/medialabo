function greeting() {           ///足し算した答えを出力する
    let a = document.querySelector('input[name="left"]');
    let c = document.querySelector('input[name="right"]');
    hidari = a.value;  ///入力された結果
    migi = c.value;   ///入力された結果
    let seisu_hidari = Number(hidari);   ///文字を数字に変換
    let seisu_migi = Number(migi);       ///文字を数字に変換
    kotae = seisu_hidari + seisu_migi;   ///足し算する
    let p = document.querySelector('span#answer');    ///答えを出力する
    p.textContent = kotae;
  }
 ///表示ボタン」にイベントハンドラ greeting() を登録します
  b = document.querySelector('button#calc');  ///id が "calc" のボタンを検索し，結果を変数 b に代入
  b.addEventListener('click', greeting);       ///ボタン b のクリックイベントのハンドラとして greeting を登録