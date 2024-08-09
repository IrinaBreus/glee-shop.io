// import calcScroll from './modules/calcScroll';
// import scrollUp from './modules/scrollUp';

import carouselFadeIn from "./modules/carousel-fadeIn";
import copiryghtDate from "./modules/copiryghtDate";
import tabsFilter from "./modules/tabsFilter";

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

// scrollUp();
// calcScroll();

copiryghtDate('.footer-bottom__date');
carouselFadeIn();
tabsFilter('.products__tabs');
});