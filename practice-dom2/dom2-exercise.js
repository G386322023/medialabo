//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

function show() {
  //h2#addr 要素の直後にキャンパスの住所を表示する p 要素を配置
  let a = document.createElement('p');
  a.textContent = (campus.address);
  let b = document.querySelector('h2#addr');
  b.insertAdjacentElement('afterend', a);

  //h2#dept 要素の直後に学科名のリストを表示
  c = document.querySelector('h2#dept');
  d = document.createElement('ul');
  c.insertAdjacentElement('afterend' , d);

  //gakkaのnameの4回分繰り返す
  for (let n of gakka) { 
    e = document.createElement('li');
    d.insertAdjacentElement('beforeend' , e);
    e.textContent = (n.name) ;
  }
}

//クリックイベントハンドラとして show() を登録
f = document.querySelector('button#show');
f.addEventListener('click', show);
