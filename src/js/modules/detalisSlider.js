const detalisSlider = () => {
    const images = document.querySelectorAll('.detalis__img-big'),
          thumbImgs = document.querySelectorAll('.detalis__slider-thumb div');

    showImg(0); 

    thumbImgs.forEach((img, i) => {
        img.addEventListener('mouseenter', () => {
            showImg(i + 1);
        });
        img.addEventListener('mouseleave', () => {
            showImg(0);
        })
    })
    function showImg(num) {
        images.forEach(img => {
            img.style.display = 'none';
        })

        images[num].style.display = 'block';
    }
}

export default detalisSlider;