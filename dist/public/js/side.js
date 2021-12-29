
/* Actions */
let sideMenu = document.getElementById('main-side');
let sideMenuNarrow = document.getElementById('main-side-narrow');
let sideMenuNarrowContent = document.querySelector('.main-side-narrow-content');
let viewPort = document.getElementsByTagName('body');
let viewWindow = document.getElementsByClassName('view-port');
let ham_menu = document.getElementsByClassName('ham-menu')[0];


function closeMenu() {
    viewPort[0].style.overflow = "scroll";
    sideMenu.style.animation = 'push-left-side 0.5s linear';
    setTimeout(() => {
        sideMenu.style.display = 'none';
        sideMenu.style.animation = 'push-right-side 0.5s linear';
    }, 500)
    // viewPort[0].style.overflow = 'hidden';

    viewWindow[0].style.cssText = '';
}

function openMenu() {

    viewPort[0].style.overflow = "hidden";
    sideMenu.style.display = 'block';
    viewWindow[0].style.cssText = 'position:fixed;top:0;left:0;z-index: 200;background-color: rgba(0,0,0,0.5); height: 100%;width: 100%;';
}

function openNarrowMenu() {
    // console.log(sideMenuNarrowContent);
    // sideMenuNarrow.style.visibility = 'visible';
    sideMenuNarrowContent.style.display = 'flex';
    sideMenuNarrow.style.zIndex = '200';  
    ham_menu.style.visibility = 'hidden';  
    // ham_menu.style.vis = 'none';  
}

function closeNarrowMenu() {
    sideMenuNarrowContent.style.animation = 'push-up 0.5s linear';
    setTimeout(() => {
        sideMenuNarrowContent.style.display = 'none';
        sideMenuNarrowContent.style.animation = 'drop-down 0.5s linear';
        ham_menu.style.visibility = 'visible';
        sideMenuNarrow.style.zIndex = '-1';  
    }, 500) 
}