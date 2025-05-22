function changeDom() {           
    let l = document.createElement('li');   //新しい li 要素（のオブジェクト）を作成して，変数 l に代入
    l.textContent = 'ヨット';    //作った li 要素のテキストを「ヨット」としています
    let u = document.querySelector('ul#kazoeuta');   // idが "kazoeuta" の ul 要素を検索
    u.insertAdjacentElement('beforeend', l);   //ul 要素の内部（最後）に「ヨット」のli要素を追加配置

    let i = document.querySelector('img#bluemoon');   // 要素の検索
    i.setAttribute('src' , 'bluemoon.jpg');   // i のメソッド setAttribute() を呼び出して属性を追加

    let a = document.createElement('a');
    let p = document.querySelector('p#takudai');
    p.insertAdjacentElement('afterend' , a);
    a.textContent = '拓殖大学HP' ;
    a.setAttribute('href' , 'https://www.takushoku-u.ac.jp');

    l = document.querySelector('li#mochi');
    l.remove();

    u = document.querySelector('ul#kassen');
    u.remove();

    p = document.querySelector('p#primary');

    u = document.createElement('ul');
    p.insertAdjacentElement('afterend' , u);

    l = document.createElement('li');
    u.insertAdjacentElement('beforeend' , l);
    l.textContent = '赤';

    l = document.createElement('li');
    u.insertAdjacentElement('beforeend' , l);
    l.textContent = '緑';

    l = document.createElement('li');
    u.insertAdjacentElement('beforeend' , l);
    l.textContent = '青';
  }

  b = document.querySelector('button#henkou');  ///id が "calc" のボタンを検索し，結果を変数 b に代入
  b.addEventListener('click', changeDom); 