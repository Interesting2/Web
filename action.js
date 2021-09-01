
let sideMenu = document.getElementById('main-side');
let viewPort = document.getElementsByTagName('body');
let navWindow = document.getElementsByClassName('nav-window');

function closeMenu() {
    sideMenu.style.transition = 'width 2s';
    sideMenu.style.width = '0';
    viewPort[0].style.marginRight = "0";
}
function openMenu() {
    sideMenu.style.display = 'block';
    //viewPort[0].style.marginRight = "500px";
    sideMenu.style.transition = 'width ease-in-out 2s';
    sideMenu.style.width = '500px';

}
