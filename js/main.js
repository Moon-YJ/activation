const main = document.querySelector('main');
const btns = main.querySelectorAll('ul li');
const articles = main.querySelectorAll('section article');

// 버튼 클릭 이벤트문
btns.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		// 클릭한 버튼에 on 클래스 여부 확인(있으면 return으로 함수 실행 중지)
		if (btns[i].classList.contains('on')) return;
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
