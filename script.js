document.querySelector('.question__text').style.display = 'none';

const corrAns = document.querySelector('.btn__answer--correct');
corrAns.addEventListener('click', function() {
	corrAns.style.backgroundColor = '#e5975d';
	corrAns.style.color = 'white';
});

const uncorrAns = document.querySelectorAll('.btn__answer--uncorrect');

const uncorrAnsArr = Array.from(uncorrAns);

for (var i = 0; i < uncorrAnsArr.length; i++) {
	uncorrAnsArr[i].addEventListener('click', function() {
		document.querySelector('.question__text').style.display = 'block';
		corrAns.style.backgroundColor = '#f3f5f8';
		corrAns.style.color = '#362d29';
	});	
}



