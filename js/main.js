/*
  DOM 안에서 자주 쓰이는 유용한 property
  - DOM.innerText: 해당 돔에 연결되어있는 text값 호출
  - DOM.innerHTML: 해당 돔에 연결되어있는 자식 tag 호출
  - DOM.className: 해당 돔에 연결되어있는 모든 클래스명을 문자열로 호출
*/

const main = document.querySelector('main');
const btns = main.querySelectorAll('ul li');
const articles = main.querySelectorAll('section article');

// advanced 브랜치 (함수 생성하여 재활용)
/*
  const activation = (arr, idx) => {
    arr.forEach((el) => {
      el.classList.remove('on');
    });
    arr[idx].classList.add('on');
  };
*/

btns.forEach((btn, i) => {
	btn.addEventListener('click', (e) => {
		// 클릭시 해당 li의 텍스트 확인
		console.log(e.currentTarget.innerText);

		// 텍스트 변경 (innerText객체의 key이기 때문에 대입연산자로 해당 값 변경 가능)
		//e.currentTarget.innerText = i;

		// 클릭한 li의 텍스트값을 가져와서 span으로 감싼 후, li에 innerHTML로 등록
		e.currentTarget.innerHTML = `<span>${e.currentTarget.innerText}</span>`;

		btns.forEach((btn) => btn.classList.remove('on'));
		btns[i].classList.add('on');
		articles.forEach((article) => article.classList.remove('on'));
		articles[i].classList.add('on');
	});
});
