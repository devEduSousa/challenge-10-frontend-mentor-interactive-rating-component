const questionDiv = document.querySelector('.question');
const thanksDiv = document.querySelector('.thanks');
const optionsDiv = document.querySelectorAll('.circle.option');
const submitButton = document.querySelector('button');
const span = document.querySelector('.reply span');

// let quant = 1;
optionsDiv.forEach((item) => {
    item.addEventListener('click', () => {
        optionsDiv.forEach((item) => {
            if(item.classList.contains('check')) {
                item.classList.remove('check');
                item.style.background = 'rgba(149, 158, 172, .1)';
                item.querySelector('span').style.color = 'hsl(216, 12%, 54%)'
                span.innerText = '';
            };
        });

        item.classList.add('check');
        item.style.background = '#fb7413';
        item.querySelector('span').style.color = '#fff'
        span.innerText = item.innerText;
    });
});

submitButton.addEventListener('click', (e) => {
    if(span.innerText === '') {
        return;
    } else {
        e.preventDefault();
        questionDiv.classList.toggle('hide');
        thanksDiv.classList.toggle('hide');
    };
});