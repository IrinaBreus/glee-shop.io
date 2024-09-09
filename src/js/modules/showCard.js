// import getResourse from "../services/request";


const products =  [
    {
        src: "img/product/1.jpg",
        title : "Wooden radio",
        rate: 2,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Furnitures"
    },
    {
        src: "img/product/2.jpg",
        title : "Wooden chair",
        rate: 3,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Chairs"
    },
    {
        src: "img/product/3.jpg",
        title : "White chair",
        rate: 4,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Lighting"
    },
    {
        src: "img/product/4.jpg",
        title : "Retro table",
        rate: 5,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Decor"
    },
    {
        src: "img/product/5.jpg",
        title : "Wooden radio",
        rate: 4,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Furnitures"
    },
    {
        src: "img/product/6.jpg",
        title : "Wooden chair",
        rate: 3,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Chairs"
    },
    {
        src: "img/product/7.jpg",
        title : "White chair",
        rate: 4,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Lighting"
    },
    {
        src: "img/product/8.jpg",
        title : "Retro table",
        rate: 5,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Decor"
    },
    {
        src: "img/product/9.jpg",
        title : "Wooden radio",
        rate: 4,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Furnitures"
    },
    {
        src: "img/product/10.jpg",
        title : "Wooden chair",
        rate: 3,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Chairs"
    },
    {
        src: "img/product/11.jpg",
        title : "White chair",
        rate: 4,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Lighting"
    },
    {
        src: "img/product/12.jpg",
        title : "Retro table",
        rate: 5,
        price: "29.00",
        descr: "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        category: "Decor"
    }
]

const showCard = (parentSelector, num = 12) => {
    // if (!parentSelector) return;
    try{
        const parent = document.querySelector(parentSelector),
            triggerList = document.querySelector('.shop__view-btn_list'),
            triggerGrid = document.querySelector('.shop__view-btn_grid');
        
        parent.innerHTML = '';

    // getResourse()
    //     .then(data => {
        createCard()
    
        if (triggerList) {
            triggerList.addEventListener('click', () => {
                triggerGrid.classList.remove('shop__view-btn_active');
                triggerList.classList.add('shop__view-btn_active');
                parent.classList.remove('shop__cards_grid');
                parent.classList.add('shop__cards_list');
                num = 4;
                parent.innerHTML = '';
                createCard();
            });
        };

        if (triggerGrid) {
            triggerGrid.addEventListener('click', () => {
                triggerList.classList.remove('shop__view-btn_active');
                triggerGrid.classList.add('shop__view-btn_active');
                parent.classList.add('shop__cards_grid');
                parent.classList.remove('shop__cards_list');
                num = 12;
                parent.innerHTML = '';
                createCard();
            });
        }
    // });

    function createCard() {
        products.forEach(({src, title, rate, price, descr, category}, i) => {
            if (i < num) {

                let card = document.createElement('div');
                card.classList.add('products__item');
                card.setAttribute('data-category', `${category}`);
                if (parent.classList.contains('shop__cards_list')) {
                    card.innerHTML = `
                        <div class="products__item-img" href="#">
                                <a href="detalis.html">
                                    <img src=${src} alt="product">
                                </a>
                            </div>
                            <div class="products__item-txt">
                                <a href="detalis.html" class="products__item-title">
                                    <h3>${title}</h3>
                                </a>
                                <div class="stars stars_28" style="--rating: ${rate};" aria-label="Rating of this product is ${rate} out of 5."></div>
                                <div class="products__item-price">$${price}</div>
                                <a class="products__item-descr" href="detalis.html">
                                    ${descr}
                                </a>
                                <div class="products__item-links">
                                <a class="products__item-link" href="detalis.html">
                                    <svg width="20px" height="20px">
                                        <path fill="#A3BBC8"
                                        d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 14.1000,3.357 14.1000,7.499 C14.1000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z"/>
                                    </svg>
                                </a>
                                <a class="products__item-link" href="#">
                                    <svg width="22px" height="20px">
                                        <path fill="#A3BBC8"
                                        d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z"/>
                                    </svg>
                                </a>
                                <a class="products__item-link" href="#">
                                    <svg width="22px" height="18px">
                                        <path fill="#A3BBC8"
                                        d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z"/>
                                    </svg>
                                </a>
                                </div>
                            </div>
                    `;
                } else {
                    card.innerHTML = `
                        <div class="products__item-img">
                            <img src=${src} alt="product">
                            <div class="products__item-links">
                                <a class="products__item-link" href="detalis.html">
                                    <svg width="20px" height="20px">
                                        <path fill="#A3BBC8"
                                        d="M19.450,19.448 C18.719,20.181 17.531,20.181 16.799,19.448 L12.211,14.860 C13.274,14.178 14.178,13.272 14.862,12.209 L19.450,16.798 C20.183,17.530 20.183,18.718 19.450,19.448 ZM7.500,14.999 C3.358,14.999 -0.000,11.640 -0.000,7.499 C-0.000,3.357 3.358,-0.002 7.500,-0.002 C11.642,-0.002 14.1000,3.357 14.1000,7.499 C14.1000,11.640 11.642,14.999 7.500,14.999 ZM7.500,1.873 C4.398,1.873 1.875,4.397 1.875,7.499 C1.875,10.601 4.398,13.123 7.500,13.123 C10.602,13.123 13.125,10.601 13.125,7.499 C13.125,4.397 10.602,1.873 7.500,1.873 ZM4.375,7.499 L3.125,7.499 C3.125,5.087 5.088,3.123 7.500,3.123 L7.500,4.374 C5.777,4.374 4.375,5.776 4.375,7.499 Z"/>
                                    </svg>
                                </a>
                                <a class="products__item-link" href="#">
                                    <svg width="22px" height="20px">
                                        <path fill="#A3BBC8"
                                        d="M21.934,5.216 L18.217,13.776 C18.082,14.075 17.797,14.264 17.471,14.264 L7.257,14.264 C6.891,14.264 6.565,14.020 6.470,13.667 L3.147,1.629 L0.814,1.629 C0.366,1.629 -0.000,1.262 -0.000,0.814 C-0.000,0.365 0.366,-0.002 0.814,-0.002 L3.757,-0.002 C4.124,-0.002 4.449,0.243 4.544,0.596 L7.867,12.634 L16.929,12.634 L19.940,5.705 L9.902,5.705 C9.454,5.705 9.088,5.338 9.088,4.889 C9.088,4.440 9.454,4.074 9.902,4.074 L21.188,4.074 C21.459,4.074 21.717,4.211 21.866,4.440 C22.015,4.673 22.043,4.957 21.934,5.216 ZM6.484,16.303 C7.501,16.303 8.329,17.131 8.329,18.150 C8.329,19.169 7.501,19.999 6.484,19.999 C5.466,19.999 4.639,19.169 4.639,18.150 C4.639,17.131 5.466,16.303 6.484,16.303 ZM17.892,16.303 C18.909,16.235 19.791,17.009 19.859,18.015 C19.886,18.517 19.737,18.994 19.411,19.360 C19.085,19.740 18.638,19.958 18.149,19.999 C18.109,19.999 18.055,19.999 18.014,19.999 C17.051,19.999 16.250,19.238 16.183,18.273 C16.115,17.267 16.874,16.371 17.892,16.303 Z"/>
                                    </svg>
                                </a>
                                <a class="products__item-link" href="#">
                                    <svg width="22px" height="18px">
                                        <path fill="#A3BBC8"
                                        d="M21.990,5.820 C21.907,4.269 21.250,2.813 20.141,1.720 C19.016,0.610 17.545,-0.001 16.002,-0.001 C13.691,-0.001 12.054,1.784 11.175,2.744 C11.125,2.798 11.071,2.857 11.019,2.913 C10.991,2.882 10.963,2.849 10.936,2.819 C10.132,1.903 8.460,-0.001 5.998,-0.001 C4.455,-0.001 2.985,0.610 1.859,1.720 C0.750,2.813 0.093,4.269 0.010,5.820 C-0.072,7.361 0.320,8.700 1.281,10.158 C2.142,11.466 4.385,13.532 6.044,14.906 C7.749,16.317 9.994,17.999 11.009,17.999 C12.041,17.999 14.278,16.319 15.974,14.912 C17.620,13.545 19.850,11.480 20.720,10.158 C21.366,9.174 22.095,7.792 21.990,5.820 ZM19.614,9.430 C18.982,10.391 17.202,12.166 15.183,13.848 C12.777,15.852 11.352,16.643 11.011,16.674 C10.669,16.639 9.241,15.841 6.823,13.831 C4.793,12.145 3.010,10.377 2.386,9.429 C1.591,8.223 1.266,7.132 1.332,5.891 C1.467,3.372 3.560,1.322 5.998,1.322 C7.861,1.322 9.214,2.864 9.941,3.692 C10.369,4.180 10.604,4.447 11.000,4.447 C11.409,4.447 11.672,4.161 12.151,3.638 C12.945,2.772 14.273,1.322 16.002,1.322 C18.440,1.322 20.533,3.372 20.668,5.891 C20.735,7.145 20.420,8.204 19.614,9.430 Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <h3 class="products__item-title">${title}</h3>
                        <div class="products__item-price">$${price}</div>
                    `;
                }
                parent.append(card);
            }
        })
    }   
} catch(e) {}

}

export default showCard;