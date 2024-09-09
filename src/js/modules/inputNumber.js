const inputNumber = () => {
    const plus = document.querySelector('.detalis__plus'),
          minus = document.querySelector('.detalis__minus');

    plus.addEventListener('click', () => {
        plus.previousElementSibling.stepUp();
    });

    minus.addEventListener('click', () => {
        minus.nextElementSibling.stepDown();
    });
}

export default inputNumber;