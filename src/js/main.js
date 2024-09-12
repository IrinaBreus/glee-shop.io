// import calcScroll from './modules/calcScroll';
// import scrollUp from './modules/scrollUp';

import carouselFadeIn from "./modules/carousel-fadeIn";
import copiryghtDate from "./modules/copiryghtDate";
import detalisSlider from "./modules/detalisSlider";
import inputNumber from "./modules/inputNumber";
import doubleRangeSlider from "./modules/rangeSlider";
import showCard from "./modules/showCard";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import tabsFilter from "./modules/tabsFilter";

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

// scrollUp();
// calcScroll();

copiryghtDate('.footer-bottom__date');
carouselFadeIn();
doubleRangeSlider('.double-range-slider1');
showCard('.products__content', 8);

showCard('.shop__cards');


tabsFilter('.products__tabs');
tabsFilter('.new-design__tabs');
detalisSlider();
inputNumber();
tabs();
slider();
});