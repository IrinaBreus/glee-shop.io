/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_carousel_fadeIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carousel-fadeIn */ \"./src/js/modules/carousel-fadeIn.js\");\n/* harmony import */ var _modules_copiryghtDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/copiryghtDate */ \"./src/js/modules/copiryghtDate.js\");\n/* harmony import */ var _modules_rangeSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/rangeSlider */ \"./src/js/modules/rangeSlider.js\");\n/* harmony import */ var _modules_tabsFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabsFilter */ \"./src/js/modules/tabsFilter.js\");\n// import calcScroll from './modules/calcScroll';\r\n// import scrollUp from './modules/scrollUp';\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n// scrollUp();\r\n// calcScroll();\r\n\r\n(0,_modules_copiryghtDate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.footer-bottom__date');\r\n(0,_modules_carousel_fadeIn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_tabsFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.products__tabs');\r\n(0,_modules_tabsFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.new-design__tabs');\r\n(0,_modules_rangeSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.double-range-slider1');\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/carousel-fadeIn.js":
/*!*******************************************!*\
  !*** ./src/js/modules/carousel-fadeIn.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst carouselFadeIn = () => {\r\n    try {\r\n        const slides = document.querySelectorAll('.header__slider'),\r\n              textBlock = document.querySelectorAll('.header__text-block'),\r\n              dotsField = document.querySelector('.header__carousel-dots');\r\n\r\n        let index = 0;\r\n        let timerID;\r\n\r\n\r\n        slides.forEach(item => {\r\n            item.style.display = 'none';\r\n        });\r\n\r\n        showSlide(index);\r\n        \r\n        const indicator = document.createElement('ol'),\r\n              dots = [];\r\n        indicator.classList.add('header__carousel-dots');\r\n        dotsField.append(indicator);\r\n        for (let i = 0; i < slides.length; i++) {\r\n            const dot = document.createElement('li');\r\n            dot.classList.add('header__carousel-dot');\r\n            dot.setAttribute('data-slide-to', i + 1);\r\n            dot.textContent = i + 1;\r\n            indicator.append(dot);\r\n            dots.push(dot);\r\n        }\r\n\r\n        dots[0].classList.add('header__carousel-dot_active');\r\n\r\n        dots.forEach((dot, i) => {\r\n            dot.addEventListener('click', (e) => {\r\n                clearInterval(timerID);\r\n                hiddeSlider();\r\n                const slideTo = e.target.getAttribute('data-slide-to');\r\n                showSlide(slideTo - 1);\r\n                dots[i].classList.add('header__carousel-dot_active');\r\n                index = slideTo;\r\n            });\r\n            dot.addEventListener('mouseenter', () => {\r\n                clearInterval(timerID);\r\n            })\r\n            dot.addEventListener('mouseleave', () => {\r\n                activateAnimation();\r\n            })\r\n        })\r\n\r\n        activateAnimation();\r\n\r\n        textBlock.forEach(block => {\r\n            block.addEventListener('mouseenter', () => {\r\n                clearInterval(timerID);\r\n            });\r\n            block.addEventListener('mouseleave', () => {\r\n                activateAnimation();\r\n            })\r\n        })\r\n\r\n        function activateAnimation () {\r\n            timerID = setInterval(() => {\r\n                if (index == slides.length) {\r\n                    index = 0;\r\n                }\r\n                hiddeSlider();\r\n                showSlide(index);\r\n                dots[index].classList.add('header__carousel-dot_active');\r\n                index++;\r\n            }, 6000);\r\n        }\r\n\r\n        function showSlide(num) {\r\n            slides[num].style.display = 'grid';\r\n        }\r\n\r\n        function hiddeSlider() {\r\n            slides.forEach(item => {\r\n                item.style.display = 'none';\r\n            });\r\n            dots.forEach(dot => {\r\n                dot.classList.remove('header__carousel-dot_active');\r\n            })\r\n        }\r\n\r\n        \r\n    } catch (error) {}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (carouselFadeIn);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/carousel-fadeIn.js?");

/***/ }),

/***/ "./src/js/modules/copiryghtDate.js":
/*!*****************************************!*\
  !*** ./src/js/modules/copiryghtDate.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst copiryghtDate = (dateField) => {\r\n    const txt = document.querySelector(dateField);\r\n    const date = new Date().getFullYear();\r\n    \r\n    txt.innerHTML = `${date}`;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (copiryghtDate);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/copiryghtDate.js?");

/***/ }),

/***/ "./src/js/modules/rangeSlider.js":
/*!***************************************!*\
  !*** ./src/js/modules/rangeSlider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst doubleRangeSlider = (rangeSliderSection) => {\r\n    try {\r\n        const box = document.querySelector(rangeSliderSection),\r\n            minVal = box.querySelector('.min-val'),\r\n            maxVal = box.querySelector('.max-val'),\r\n            priceInputMin = box.querySelector('.min-input'),\r\n            priceInputMax = box.querySelector('.max-input'),\r\n            minGap = 150, //разница в цене\r\n            range = box.querySelector('.slider-track'),\r\n            sliderMinValue = parseInt(minVal.min),\r\n            sliderMaxValue = parseInt(maxVal.max);\r\n    \r\n            \r\n        slideMin();\r\n        slideMax();\r\n        minVal.addEventListener('input', slideMin);\r\n        maxVal.addEventListener('input', slideMax);\r\n    \r\n        // расчет показаний ползунков и выведение их в поля цен и в tooltip\r\n        function slideMin() {\r\n            let gap = parseInt(maxVal.value) - parseInt(minVal.value);\r\n            if (gap <= minGap) {\r\n                minVal.value = parseInt(maxVal.value) - minGap ;\r\n            }\r\n            priceInputMin.value = `$ ${minVal.value}.00`;\r\n            setArea();\r\n        }\r\n    \r\n        function slideMax() {\r\n            let gap = parseInt(maxVal.value) - parseInt(minVal.value);\r\n            if (gap <= minGap) {\r\n                maxVal.value = parseInt(minVal.value) + minGap ;\r\n            }\r\n            priceInputMax.value = `$ ${maxVal.value}.00`;\r\n            setArea();\r\n        }\r\n    \r\n        // расчет положения tooltip и поля инпутов между ползунками\r\n        function setArea() {\r\n            range.style.left = ((minVal.value / sliderMaxValue) * 100) + 5 + '%';\r\n            range.style.right = (100 - (maxVal.value / sliderMaxValue) * 100) + 5 + '%';\r\n        }\r\n    \r\n    \r\n        // получение ползунками значений введенных вручную в инпуты цены\r\n        priceInputMin.addEventListener('change', setMinInput);\r\n        priceInputMax.addEventListener('change', setMaxInput);\r\n    \r\n        function setMinInput() {\r\n            let minPrice = parseInt(priceInputMin.value);\r\n            if (minPrice < sliderMinValue) {\r\n                priceInputMin.value = sliderMinValue;\r\n            }\r\n            minVal.value = priceInputMin.value;\r\n            slideMin();\r\n    \r\n        }\r\n        function setMaxInput() {\r\n            let maxPrice = parseInt(priceInputMax.value);\r\n            if (maxPrice > sliderMaxValue) {\r\n                priceInputMax.value = sliderMaxValue;\r\n            }\r\n            maxVal.value = priceInputMax.value;\r\n            slideMax();\r\n        }\r\n    } catch (error) {\r\n        \r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (doubleRangeSlider);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/rangeSlider.js?");

/***/ }),

/***/ "./src/js/modules/tabsFilter.js":
/*!**************************************!*\
  !*** ./src/js/modules/tabsFilter.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst tabsFilter = (filterSection) => {\r\n    try {\r\n        const filter = document.querySelector(filterSection),\r\n              btnsPanel = filter.querySelector('.tab__lists'),\r\n              btns = btnsPanel.querySelectorAll('.tab__list'),\r\n              contents = filter.querySelectorAll('.tab__item');\r\n    \r\n        btnsPanel.addEventListener('click', (e) => {\r\n            hiddeContent();\r\n            contents.forEach(item => {\r\n                if (item.dataset.category == e.target.textContent) {\r\n                    showContent(item, e);\r\n                }\r\n                if (e.target.textContent == 'All') {\r\n                    showContent(item, e);\r\n                }\r\n            })\r\n        })\r\n    \r\n        function hiddeContent() {\r\n            contents.forEach(item => item.style.display = 'none');\r\n            btns.forEach(item => item.classList.remove('tab__list_active'));\r\n        }\r\n        function showContent(item, e) {\r\n            item.style.display = 'block';\r\n            e.target.classList.add('tab__list_active');\r\n        }\r\n    } catch (error) {}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabsFilter);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/tabsFilter.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;