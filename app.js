const correctAnswers = ['B', 'D', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 1;
        }
    });

    document.querySelector('div.result > div > p > span').textContent = `${Math.round(100*(score / userAnswers.length))}%`;

    result.classList.remove('d-none');
});