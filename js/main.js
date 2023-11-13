const main = document.querySelector('main');
const btns = main.querySelectorAll('ul li');
const articles = main.querySelectorAll('section article');

// 버튼 클릭 이벤트문
btns.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		activation(btns, i);
		activation(articles, i);
		//[btns, articles].forEach((el) => activation(el, i));
	});
});

// 인수로 그룹 선택자, 순번을 받아서
// 순번의 요소만 활성화시키는 함수
const activation = (arr, idx) => {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
};
