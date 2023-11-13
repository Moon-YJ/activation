/*
  e.currentTarget vs e.target
*/

const main = document.querySelector('main');
const btns = main.querySelectorAll('ul li');
const articles = main.querySelectorAll('section article');

// 버튼 클릭 이벤트문
btns.forEach((btn, i) => {
	btn.addEventListener('click', (e) => {
		// e.currentTarget: js 이벤트 구문에 연결되어있는 대상(예측 가능)
		// e.target: 실제 화면상에서 이벤트가 발생한 대상
		// 만약 연결되어있는 선택자가 a의 링크이동처럼 특정 기능이 있는 태그라면 해당 기능 막아야함
		e.preventDefault();

		// 클릭한 버튼에 on 클래스 여부 확인(있으면 return으로 함수 실행 중지)
		if (e.currentTarget.classList.contains('on')) return;
		activation(btns, i);
		activation(articles, i);
		//[btns, articles].forEach((el) => activation(el, i));
	});
});

// 인수로 그룹 선택자, 순번을 받아서
// 순번의 요소만 활성화시키는 함수
const activation = (arr, idx) => {
	console.log('activation');
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
};
