const slider = () => {
    const wrapper = document.querySelector('.detalis-slider__content'),
          field = wrapper.querySelector('.detalis-slider__field'),
          slides = wrapper.querySelectorAll('.detalis-slider__item'),
          prew =  document.querySelector('.detalis-slider__btn_prew'),
          next = document.querySelector('.detalis-slider__btn_next'),
          width = window.getComputedStyle(slides[0]).width;

    let offset = 0;
    let gap = 30;

    field.style.width = 100 * slides.length + gap * (slides.length - 1) + '%';
    field.style.display = 'flex';

    changeOffset();

    next.addEventListener('click', () => {
        if (offset < parseInt(width) * (slides.length - 4)) {
            offset += parseInt(width) + gap;
            field.style.transform = `translateX(-${offset}px)`;
            // next.style.display = '';
        } else {
            // next.style.display = 'none';
        }
        changeOffset();
    });

    prew.addEventListener('click', () => {
        console.log(offset);
        if (offset > 0) {
            offset -= parseInt(width) + gap;
            field.style.transform = `translateX(-${offset}px)`;
            // prew.style.display = '';
        }
        changeOffset();
    });

    function changeOffset() {
        if (offset == 0) {
            prew.style.display = 'none';
        } else if (offset > 0) {
            prew.style.display = '';   
        }

        if (offset < parseInt(width) * (slides.length - 4)) {
            next.style.display = '';
        } else {
            next.style.display = 'none';
        }
    }
}

export default slider;