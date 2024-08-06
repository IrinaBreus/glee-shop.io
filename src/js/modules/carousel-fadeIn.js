const carouselFadeIn = () => {
    try {
        const slides = document.querySelectorAll('.header__slider'),
              textBlock = document.querySelectorAll('.header__text-block'),
              dotsField = document.querySelector('.header__carousel-dots');

        let index = 0;
        let timerID;


        slides.forEach(item => {
            item.style.display = 'none';
        });

        showSlide(index);
        
        const indicator = document.createElement('ol'),
              dots = [];
        indicator.classList.add('header__carousel-dots');
        dotsField.append(indicator);
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.classList.add('header__carousel-dot');
            dot.setAttribute('data-slide-to', i + 1);
            dot.textContent = i + 1;
            indicator.append(dot);
            dots.push(dot);
        }

        dots[0].classList.add('header__carousel-dot_active');

        dots.forEach((dot, i) => {
            dot.addEventListener('click', (e) => {
                clearInterval(timerID);
                hiddeSlider();
                const slideTo = e.target.getAttribute('data-slide-to');
                showSlide(slideTo - 1);
                dots[i].classList.add('header__carousel-dot_active');
                index = slideTo;
            });
            dot.addEventListener('mouseleave', () => {
                activateAnimation();
            })
        })

        activateAnimation();

        textBlock.forEach(block => {
            block.addEventListener('mouseenter', () => {
                clearInterval(timerID);
            });
            block.addEventListener('mouseleave', () => {
                activateAnimation();
            })
        })

        function activateAnimation () {
            timerID = setInterval(() => {
                if (index == slides.length) {
                    index = 0;
                }
                hiddeSlider();
                showSlide(index);
                dots[index].classList.add('header__carousel-dot_active');
                index++;
            }, 6000);
        }

        function showSlide(num) {
            slides[num].style.display = 'grid';
        }

        function hiddeSlider() {
            slides.forEach(item => {
                item.style.display = 'none';
            });
            dots.forEach(dot => {
                dot.classList.remove('header__carousel-dot_active');
            })
        }

        
    } catch (error) {}
}

export default carouselFadeIn;