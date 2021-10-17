
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
    viewPort[0].style.cssText -= 'overflow:hidden';
    viewWindow[0].style.cssText = '';

    let subContainer = document.getElementById('side-sub-content-container');
    let mainContainer = document.getElementById('side-content-container');
    console.log(subContainer.style.transform);
    
    if (subContainer.style.transform == 'translateX(0px)') {
        console.log("here");
        subContainer.style.cssText += 'transform: translateX(-500px);';
        subContainer.style.cssText -= 'transform: translateX(0px);';
        mainContainer.style.cssText -= 'transform: translateX(500px)';
        subContainer.innerHTML = ""; 
    }


}
function openMenu() {
    viewPort[0].style.marginRight = "500px";
    viewPort[0].style.cssText += 'overflow:hidden';
    sideMenu.style.cssText -= 'transform: translateX(500px);';
    sideMenu.style.cssText += 'transform: translateX(0);';
    viewWindow[0].style.cssText = 'position:absolute;top:0;left:0;z-index: 200;background-color: rgba(0,0,0,0.5); height: 100%;width: 100%;';
    //console.log(viewWindow[0]);
}

// Show side-sub-content-container
document.querySelectorAll('.side-new-content').forEach(row => {
        row.addEventListener('click', () => {
            let subContainer = document.getElementById('side-sub-content-container');
            let mainContainer = document.getElementById('side-content-container');
            subContainer.style.cssText -= 'transform: translateX(-500px);';
            subContainer.style.cssText += 'transform: translateX(0);';
            mainContainer.style.cssText += 'transform: translateX(500px)';
            sideMenu.scrollTo(0, 0);
        });
});

document.getElementById('main-menu').addEventListener('click', () => {

    let subContainer = document.getElementById('side-sub-content-container');
    let mainContainer = document.getElementById('side-content-container');
    subContainer.style.cssText += 'transform: translateX(-500px);';
    subContainer.style.cssText -= 'transform: translateX(0);';
    mainContainer.style.cssText -= 'transform: translateX(500px)';
    subContentContainer.innerHTML = ""; // reset all pressed behaviours
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
      delay: 3000,
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