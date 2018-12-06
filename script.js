document.querySelector('.question-box__item--hint').style.opacity = '0';

const corrAns = document.querySelector('.js-answer-correct');
corrAns.addEventListener('click', function() {
	corrAns.style.backgroundColor = '#e5975d';
	corrAns.style.color = 'white';
});

const uncorrAns = document.querySelectorAll('.js-answer-uncorrect');

const uncorrAnsArr = Array.from(uncorrAns);

for (var i = 0; i < uncorrAnsArr.length; i++) {
	uncorrAnsArr[i].addEventListener('click', function() {
		document.querySelector('.question-box__item--hint').style.opacity = '100';
		corrAns.style.backgroundColor = '#f3f5f8';
		corrAns.style.color = '#362d29';
	});	
}



