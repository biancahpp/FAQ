let button = document.querySelectorAll('.h3-link');

button.forEach((element, index) => {
    element.addEventListener('click', () => showAnswer(index+1));
});

function showAnswer (ind) {
    let answer = document.getElementById(`q${ind}`);
    answer.style.display === 'none' ? answer.style.display = 'block' : answer.style.display = 'none';

    const imageButton = document.getElementById(`img-${ind}`);
    imageButton.style.transform === 'scaleY(-1)' ? imageButton.style.transform = 'none' : imageButton.style.transform = 'scaleY(-1)';

    const bold = document.getElementById(`h3-${ind}`);
    bold.style.fontWeight === '600' ? bold.style.fontWeight = '300' : bold.style.fontWeight = '600';
};
