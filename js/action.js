
let sideMenu = document.getElementById('main-side');
let viewPort = document.getElementsByTagName('body');
let navWindow = document.getElementsByClassName('nav-window');
let viewWindow = document.getElementsByClassName('view-port');
let navContainer = document.getElementsByClassName('nav-container');
let subContentContainer = document.getElementById('side-sub-target');

function closeMenu() {
    sideMenu.style.cssText -= 'transform: translateX(0);';
    sideMenu.style.cssText += 'transform: translateX(500px);';
    viewPort[0].style.marginRight = "0";
    viewWindow[0].style.cssText = '';

    let subContainer = document.getElementById('side-sub-content-container');
    let mainContainer = document.getElementById('side-content-container');
    subContainer.style.cssText += 'transform: translateX(-500px);';
    mainContainer.style.cssText += 'transform: translateX(0)';
    subContentContainer.innerHTML = "";

}
function openMenu() {
    viewPort[0].style.marginRight = "500px";
    sideMenu.style.cssText -= 'transform: translateX(500px);';
    sideMenu.style.cssText += 'transform: translateX(0);';

    viewWindow[0].style.cssText = 'position:absolute;top:0;left:0;z-index: 100;background-color: rgba(0,0,0,0.5); height: 100%;width: 100%;';
    //console.log(viewWindow[0]);
}

// Show side-sub-content-container
document.querySelectorAll('.side-new-content').forEach(row => {
        row.addEventListener('click', () => {
            let subContainer = document.getElementById('side-sub-content-container');
            let mainContainer = document.getElementById('side-content-container');
            subContainer.style.cssText += 'transform: translateX(0);';
            mainContainer.style.cssText += 'transform: translateX(500px)';
        });
});

document.getElementById('main-menu').addEventListener('click', () => {

    let subContainer = document.getElementById('side-sub-content-container');
    let mainContainer = document.getElementById('side-content-container');
    subContainer.style.cssText += 'transform: translateX(-500px);';
    mainContainer.style.cssText += 'transform: translateX(0)';
    subContentContainer.innerHTML = "";
});




function openNewProduct1() {
    subContentContainer.innerHTML = '<div class="side-content-header">Beauty & Skincare</div>\
                                    <a href="#">\
                                    <div class="side-new-content">\
                                        <div class="side-link">Cat 1</div>\
                                        <i class=""></i>\
                                    </div>\
                                    </a>\
                                    <a href="#"> \
                                    <div class="side-new-content">\
                                        <div class="side-link">Cat 2</div>\
                                        <i class=""></i>\
                                    </div>\
                                    </a>\
                                    <a href="#">\
                                    <div class="side-new-content">\
                                        <div class="side-link">Cat 3</div>\
                                        <i class="></i>\
                                    </div>\
                                    </a>'
}

/* Swiper JS */
var homeSwiper = new Swiper(".mySwiper1", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
});



function changeSwiper(x) {
    if (x.matches) {
        console.log("here1");
        document.getElementById("swiper_change").className = "swiper mySwiper3";

        let swiper3 = new Swiper(".mySwiper3", {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination3",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next3",
                prevEl: ".swiper-button-prev3",
            },
        });

    } else {
        console.log("here2");
        document.getElementById("swiper_change").className = "swiper mySwiper2";
        let swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: 5,
            spaceBetween: 30,
            slidesPerGroup: 5,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination2",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
            },
        });

    }
}
var changeSlide = window.matchMedia("(max-width: 700px)");
changeSwiper(changeSlide) // Call listener function at run time
changeSlide.addListener(changeSwiper) // Attach listener function on state changes





/*

var tmpHomeSwiper = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
});

/* Media Query  

function changeSwiper(x) {
    let swipeSmall = document.getElementsByClassName('mySwiper2')[0]; 
    let swipeContainer = document.getElementById('swiper-container');
    if (x.matches) { // If media query matches
        swipeSmall.style.cssText += 'display: none';
        swipeContainer.innerHTML += '<div class="swiper mySwiper3">\
        <div class="swiper-wrapper">\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        </div>\
        <div class="swiper-button-next swiper-button-next3"></div>\
        <div class="swiper-button-prev swiper-button-prev3"></div>\
        <div class="swiper-pagination swiper-pagination3"></div>\
    </div>';
        
        
        console.log(swipeContainer);
       
        
        
    } else {
        console.log("here");
        swipeSmall.style.cssText -= 'display: none';
        swipeContainer.innerHTML -= '<div class="swiper mySwiper3">\
        <div class="swiper-wrapper">\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        <div class="swiper-slide">\
            <div class="slider-box">\
                <div class="product-container">\
                    <img src="./adidas_shoes.png" class="" alt="adidas_shoes">\
                </div>\
                <div class="product-details">\
                    <p class="product-name">FooBar123</p>\
                    <a href="" class="product-price">Price: $50</a>\
                </div>\
                <div class="product-function-container">\
                    <div class="product-function">\
                        <button>Preview Product</button>\
                    </div>\
                    <div class="product-function">\
                        <button>Add to Cart</button>\
                    </div>\
                </div>\
            </div>\
        </div>\
        </div>\
        <div class="swiper-button-next swiper-button-next3"></div>\
        <div class="swiper-button-prev swiper-button-prev3"></div>\
        <div class="swiper-pagination swiper-pagination3"></div>\
    </div>';
    }
  }

var changeSlide = window.matchMedia("(max-width: 700px)");
//changeSwiper(changeSlide) // Call listener function at run time
changeSlide.addListener(changeSwiper) // Attach listener function on state changes
*/