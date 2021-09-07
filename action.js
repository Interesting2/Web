
let sideMenu = document.getElementById('main-side');
let viewPort = document.getElementsByTagName('body');
let navWindow = document.getElementsByClassName('nav-window');
let viewWindow = document.getElementsByClassName('view-port');
let navContainer = document.getElementsByClassName('nav-container');

function closeMenu() {
    sideMenu.style.transition = 'width 2s';
    sideMenu.style.width = '0';
    viewPort[0].style.marginRight = "0";
    viewWindow[0].style.cssText = '';
    navContainer[0].style.cssText -= 'z-index: -1';
}
function openMenu() {
    sideMenu.style.display = 'block';
    //viewPort[0].style.marginRight = "500px";
    sideMenu.style.transition = 'width ease-in-out 2s';
    sideMenu.style.width = '500px';
    let styles = `
        .view-port {
            z-index: -1;
            background-color: rgba(0, 0, 0, 0.2);
            height: 100%;
            width: 100%;
        }
    `
    viewWindow[0].style.cssText = 'z-index: 999;background-color: rgba(0,0,0,0.5);height: 100%;width: 100%;';
    //console.log(viewWindow[0]);
    navContainer[0].style.cssText += 'z-index: -1';



}
