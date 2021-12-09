/* Actions */
let sideMenu = document.getElementById('main-side');
let viewPort = document.getElementsByTagName('body');
let navWindow = document.getElementsByClassName('nav-window');
let viewWindow = document.getElementsByClassName('view-port');
let navContainer = document.getElementsByClassName('nav-container');
let subContentContainer = document.getElementById('side-sub-target');

// Miscellaneous
let overlay_images = document.getElementsByClassName('overlay-image');
let overlay_icons = document.getElementsByClassName('overlay-icons');
let overlay = document.getElementsByClassName("overlay");
let quantity = document.getElementsByClassName("quantity");
let overlay_cart = document.getElementsByClassName("overlay-cart");
let plus_square = document.getElementsByClassName("plus-square");
let minus_square = document.getElementsByClassName("minus-square");
let product_counter = document.getElementsByClassName("product-counter");

// Best sellers
let best_overlay_images = document.getElementsByClassName('best-overlay-image');
let best_overlay_icons = document.getElementsByClassName('best-overlay-icons');
let best_overlay = document.getElementsByClassName("best-overlay");
let best_quantity = document.getElementsByClassName("best-quantity");
let best_overlay_cart = document.getElementsByClassName("best-overlay-cart");
let best_plus_square = document.getElementsByClassName("best-plus-square");
let best_minus_square = document.getElementsByClassName("best-minus-square");
let best_product_counter = document.getElementsByClassName("best-product-counter");

// featured products
let featured_overlay = document.getElementsByClassName("featured-overlay");
let featured_overlay_images = document.getElementsByClassName('featured-overlay-image');
let featured_overlay_icons = document.getElementsByClassName('featured-overlay-icons');
let featured_quantity = document.getElementsByClassName("featured-quantity");
let featured_overlay_cart = document.getElementsByClassName("featured-overlay-cart");
let featured_plus_square = document.getElementsByClassName("featured-plus-square");
let featured_minus_square = document.getElementsByClassName("featured-minus-square");
let featured_product_counter = document.getElementsByClassName("featured-product-counter");

let heart_empty = document.getElementsByClassName('fa-heart-o');
let heart_filled = document.getElementsByClassName('fa-heart');

let mobile_search_container = document.getElementsByClassName('mobile-search-container')[0];
let close_search = document.getElementsByClassName('close-search')[0];

function closeMenu() {
    sideMenu.style.cssText -= 'transform: translateX(0);';
    sideMenu.style.cssText += 'transform: translateX(3000px);';
    viewPort[0].style.marginRight = "0";
    viewPort[0].style.cssText -= 'overflow:hidden';
    viewWindow[0].style.cssText = '';

    let subContainer = document.getElementById('side-sub-content-container');
    let mainContainer = document.getElementById('side-content-container');
    console.log(subContainer.style.transform);
    
    if (subContainer.style.transform == 'translateX(0px)') {
        console.log("here");
        subContainer.style.cssText += 'transform: translateX(-3000px);';
        subContainer.style.cssText -= 'transform: translateX(0px);';
        mainContainer.style.cssText -= 'transform: translateX(3000px)';
        subContainer.innerHTML = ""; 
    }


}
function openMenu() {
    viewPort[0].style.marginRight = "3000px";
    viewPort[0].style.cssText += 'overflow:hidden';
    sideMenu.style.cssText -= 'transform: translateX(3000px);';
    sideMenu.style.cssText += 'transform: translateX(0);';
    viewWindow[0].style.cssText = 'margin: 0; padding: 0; position:fixed;top:0;left:0;z-index: 200;background-color: rgba(0,0,0,0.5); height: 100%;width: 100%;';
    //console.log(viewWindow[0]);
}

// Show side-sub-content-container
document.querySelectorAll('.side-new-content').forEach(row => {
        row.addEventListener('click', () => {
            let subContainer = document.getElementById('side-sub-content-container');
            let mainContainer = document.getElementById('side-content-container');
            subContainer.style.display = 'block';
            mainContainer.style.display = 'none';
            sideMenu.scrollTo(0, 0);
        });
});

document.getElementById('main-menu').addEventListener('click', () => {

    let subContainer = document.getElementById('side-sub-content-container');
    let mainContainer = document.getElementById('side-content-container');
    subContainer.style.display = 'none';
    mainContainer.style.display = 'block';
    subContentContainer.innerHTML = ""; // reset all pressed behaviours
});

for (let i = 0; i < heart_empty.length; i ++) {
    console.log(i);
    let eachHeartEmpty = heart_empty[i];
    let eachHeartFilled = heart_filled[i];

    eachHeartEmpty.addEventListener('click', () => {
        eachHeartFilled.style.display = 'inline-block';
        eachHeartEmpty.style.display = 'none';
    });
    
    eachHeartFilled.addEventListener('click', () => {
        eachHeartFilled.style.display = 'none';
        eachHeartEmpty.style.display = 'inline-block';
    });

}


for (let i = 0; i < 6; i ++) {
    let eachOverlay = overlay[i];
    let eachImage = overlay_images[i];
    let eachIcon = overlay_icons[i];
    let eachQuantity = quantity[i];
    let eachCart = overlay_cart[i];
    let eachPlus = plus_square[i];
    let eachMinus = minus_square[i];
    let eachCounter = product_counter[i];

    eachOverlay.addEventListener('mouseover', () => {
        console.log(1);
        eachImage.style.opacity = '0.4';
        eachIcon.style.display = 'flex';
        // eachQuantity.style.display = 'none';


    });

    eachOverlay.addEventListener('mouseout', () => {
        eachImage.style.opacity = '1';
        eachIcon.style.display = 'none';


    });

    eachCart.addEventListener('click', () => {
        eachCart.style.display = 'none';
        eachQuantity.style.display = 'flex';

        for (let j = 0; j < 6; j ++) {
            if (i != j) {
                overlay_cart[j].style.display = 'flex';
                quantity[j].style.display = 'none';
            }
        }
    });

    eachPlus.addEventListener('click', () => {
        eachCounter.innerHTML = parseInt(eachCounter.innerHTML) + 1;
    });

    eachMinus.addEventListener('click', () => {
        let sales = parseInt(eachCounter.innerHTML) - 1;
        if (sales >= 0) eachCounter.innerHTML = parseInt(eachCounter.innerHTML) - 1;
    });


}


for (let i = 0; i < 4; i ++) {
    let bestEachOverlay = best_overlay[i];
    let bestEachImage = best_overlay_images[i];
    let bestEachIcon = best_overlay_icons[i];
    let bestEachQuantity = best_quantity[i];
    let bestEachCart = best_overlay_cart[i];
    let bestEachPlus =best_plus_square[i];
    let bestEachMinus = best_minus_square[i]
    let bestEachCounter = best_product_counter[i];

    bestEachOverlay.addEventListener('mouseover', () => {
        console.log(1);
        bestEachImage.style.opacity = '0.4';
        bestEachIcon.style.display = 'flex';
        // eachQuantity.style.display = 'none';
    });

    bestEachOverlay.addEventListener('mouseout', () => {
        bestEachImage.style.opacity = '1';
        bestEachIcon.style.display = 'none';
    });

    bestEachCart.addEventListener('click', () => {
        bestEachCart.style.display = 'none';
        bestEachQuantity.style.display = 'flex';

        for (let j = 0; j < 4; j ++) {
            if (i != j) {
                best_overlay_cart[j].style.display = 'flex';
                best_quantity[j].style.display = 'none';
            }
        }
    });

    bestEachPlus.addEventListener('click', () => {
        bestEachCounter.innerHTML = parseInt(bestEachCounter.innerHTML) + 1;
    });

    bestEachMinus.addEventListener('click', () => {
        let sales = parseInt(bestEachCounter.innerHTML) - 1;
        if (sales >= 0) bestEachCounter.innerHTML = parseInt(bestEachCounter.innerHTML) - 1;
    });


}

for (let i = 0; i < 4; i ++) {
    let featuredEachOverlay = featured_overlay[i];
    let featuredEachImage = featured_overlay_images[i];
    let featuredEachIcon = featured_overlay_icons[i];
    let featuredEachQuantity = featured_quantity[i];
    let featuredEachCart = featured_overlay_cart[i];
    let featuredEachPlus = featured_plus_square[i];
    let featuredEachMinus = featured_minus_square[i]
    let featuredEachCounter = featured_product_counter[i];

    featuredEachOverlay.addEventListener('mouseover', () => {
        featuredEachImage.style.opacity = '0.4';
        featuredEachIcon.style.display = 'block';
        // eachQuantity.style.display = 'none';
    });

    featuredEachOverlay.addEventListener('mouseout', () => {
        featuredEachImage.style.opacity = '1';
        featuredEachIcon.style.display = 'none';
    });

    featuredEachCart.addEventListener('click', () => {
        featuredEachCart.style.display = 'none';
        featuredEachQuantity.style.display = 'flex';

        for (let j = 0; j < 4; j ++) {
            if (i != j) {
                featured_overlay_cart[j].style.display = 'flex';
                featured_quantity[j].style.display = 'none';
            }
        }
    });

    featuredEachPlus.addEventListener('click', () => {
        featuredEachCounter.innerHTML = parseInt(featuredEachCounter.innerHTML) + 1;
    });

    featuredEachMinus.addEventListener('click', () => {
        let sales = parseInt(featuredEachCounter.innerHTML) - 1;
        if (sales >= 0) featuredEachCounter.innerHTML = parseInt(featuredEachCounter.innerHTML) - 1;
    });
}


function dropDownSearch() {
    mobile_search_container.style.display = 'block';
    close_search.style.display = 'block';

}

function closeDropDownSearch() {
    mobile_search_container.style.display = 'none';
    close_search.style.display = 'none';
}

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
      delay: 100000,
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

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 20,
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