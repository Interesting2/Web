/* Actions */
let sideMenu = document.getElementById('main-side');
let viewPort = document.getElementsByTagName('body');
let navWindow = document.getElementsByClassName('nav-window');
let viewWindow = document.getElementsByClassName('view-port');
let navContainer = document.getElementsByClassName('nav-container');
let subContentContainer = document.getElementById('side-sub-target');

let mobile_search_container = document.getElementsByClassName('mobile-search-container')[0];
let close_search = document.getElementsByClassName('close-search')[0];

let account_page = document.getElementById('account-page');
let sign_out_icon = document.querySelector('.sign-out-icon');
let sign_in_icon = document.querySelector('.sign-in-icon');
let login_modal = document.querySelector('.login-container');


window.addEventListener("scroll", function () {
    if ((document.documentElement.scrollTop >= 50 || document.body.scrollTop >= 50)) {
        if (!navContainer[0].classList.contains('nav-container-bg-color')) {
            navContainer[0].classList.add('nav-container-bg-color');
        }
    } else if ((document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) && navContainer[0].classList.contains('nav-container-bg-color')) {
        navContainer[0].classList.remove('nav-container-bg-color');
    }
});

account_page.addEventListener('click', () => {
    console.log("clicked");
    login_modal.style.display = 'flex';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
});

function closeMenu() {
    sideMenu.style.display = 'none';
    viewPort[0].style.cssText -= 'overflow:hidden';
    viewWindow[0].style.cssText = '';

    let subContainer = document.getElementById('side-sub-content-container');
    let mainContainer = document.getElementById('side-content-container');
    console.log(subContainer.style.transform);
    
    // if (subContainer.style.transform == 'translateX(0px)') {
    //     console.log("here");
    //     subContainer.style.cssText += 'transform: translateX(-3000px);';
    //     subContainer.style.cssText -= 'transform: translateX(0px);';
    //     mainContainer.style.cssText -= 'transform: translateX(3000px)';
    //     subContainer.innerHTML = ""; 
    // }


}
function openMenu() {

    viewPort[0].style.cssText += 'overflow:hidden';
    sideMenu.style.display = 'block';
    viewWindow[0].style.cssText = 'position:fixed;top:0;left:0;z-index: 200;background-color: rgba(0,0,0,0.5); height: 100%;width: 100%;';
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