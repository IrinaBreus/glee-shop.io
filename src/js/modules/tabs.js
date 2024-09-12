const tabs = () => {
    try {
        const trigger = document.querySelectorAll('.detalis-tabs__link'),
              contents = document.querySelectorAll('.detalis-tabs__item'),
            //   comments = contents.querySelectorAll('.comments__item'),
              reviews = document.querySelector('.detalis-tabs__reviews');

        clearContent();
        trigger[0].classList.add('detalis-tabs__link_active');
        contents[0].style.display = '';

        // reviews.innerHTML = `${comments.length}`;

        trigger.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                clearContent();
                btn.classList.add('detalis-tabs__link_active');
                contents[i].style.display = '';
            })
        })

        function clearContent() {
            trigger.forEach(btn => btn.classList.remove('detalis-tabs__link_active'));
            contents.forEach(elem => elem.style.display = 'none');
        }
    } catch (error) {
        
    }

    
}

export default tabs;