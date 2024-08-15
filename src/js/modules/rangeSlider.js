const doubleRangeSlider = (rangeSliderSection) => {
    try {
        const box = document.querySelector(rangeSliderSection),
            minVal = box.querySelector('.min-val'),
            maxVal = box.querySelector('.max-val'),
            priceInputMin = box.querySelector('.min-input'),
            priceInputMax = box.querySelector('.max-input'),
            minGap = 150, //разница в цене
            range = box.querySelector('.slider-track'),
            sliderMinValue = parseInt(minVal.min),
            sliderMaxValue = parseInt(maxVal.max);
    
            
        slideMin();
        slideMax();
        minVal.addEventListener('input', slideMin);
        maxVal.addEventListener('input', slideMax);
    
        // расчет показаний ползунков и выведение их в поля цен и в tooltip
        function slideMin() {
            let gap = parseInt(maxVal.value) - parseInt(minVal.value);
            if (gap <= minGap) {
                minVal.value = parseInt(maxVal.value) - minGap ;
            }
            priceInputMin.value = `$ ${minVal.value}.00`;
            setArea();
        }
    
        function slideMax() {
            let gap = parseInt(maxVal.value) - parseInt(minVal.value);
            if (gap <= minGap) {
                maxVal.value = parseInt(minVal.value) + minGap ;
            }
            priceInputMax.value = `$ ${maxVal.value}.00`;
            setArea();
        }
    
        // расчет положения tooltip и поля инпутов между ползунками
        function setArea() {
            range.style.left = ((minVal.value / sliderMaxValue) * 100) + 5 + '%';
            range.style.right = (100 - (maxVal.value / sliderMaxValue) * 100) + 5 + '%';
        }
    
    
        // получение ползунками значений введенных вручную в инпуты цены
        priceInputMin.addEventListener('change', setMinInput);
        priceInputMax.addEventListener('change', setMaxInput);
    
        function setMinInput() {
            let minPrice = parseInt(priceInputMin.value);
            if (minPrice < sliderMinValue) {
                priceInputMin.value = sliderMinValue;
            }
            minVal.value = priceInputMin.value;
            slideMin();
    
        }
        function setMaxInput() {
            let maxPrice = parseInt(priceInputMax.value);
            if (maxPrice > sliderMaxValue) {
                priceInputMax.value = sliderMaxValue;
            }
            maxVal.value = priceInputMax.value;
            slideMax();
        }
    } catch (error) {
        
    }
}

export default doubleRangeSlider;