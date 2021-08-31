
let sideMenu = document.getElementById('main-side');
let viewPort = document.getElementsByTagName('body');

function closeMenu() {
    sideMenu.style.transition = 'width 2.5s';
    sideMenu.style.width = '0';
    viewPort[0].style.marginRight = "0";
}
function openMenu() {
    sideMenu.style.display = 'block';
    viewPort[0].style.marginRight = "200px";
    sideMenu.style.transition = 'width ease-in-out 2.5s';
    sideMenu.style.width = '500px';
}