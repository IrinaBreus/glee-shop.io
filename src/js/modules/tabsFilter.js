const tabsFilter = (filterSection) => {
    try {
        const filter = document.querySelector(filterSection),
              btnsPanel = filter.querySelector('.tab__lists'),
              btns = btnsPanel.querySelectorAll('.tab__list'),
              contents = filter.querySelector('.tab__content').children;
    
        btnsPanel.addEventListener('click', (e) => {
            hiddeContent();
            [...contents].forEach(item => {
                if (item.dataset.category == e.target.textContent) {
                    showContent(item, e);
                }
                if (e.target.textContent == 'All') {
                    showContent(item, e);
                }
            })
        })
    
        function hiddeContent() {
            [...contents].forEach(item => item.style.display = 'none');
            btns.forEach(item => item.classList.remove('tab__list_active'));
        }
        function showContent(item, e) {
            item.style.display = 'block';
            e.target.classList.add('tab__list_active');
        }
    } catch (error) {}
}

export default tabsFilter;