const main = document.querySelector('main');
const btns = main.querySelectorAll('ul li');
const articles = main.querySelectorAll('section article');

const activation = (arr, idx) => {
	arr.forEach((el) => {
		el.classList.remove('on');
	});
	arr[idx].classList.add('on');
};

btns.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[i].classList.add('on');
		articles.forEach((article) => article.classList.remove('on'));
		articles[i].classList.add('on');
	});
});
