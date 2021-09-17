
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
                                    <a href="#"> \
                                    <div class="side-new-content">\
                                        <div class="side-link">Cat 1</div>\
                                        <i class="fa fa-hand-o-right"></i>\
                                    </div>\
                                    </a>\
                                    <a href="#">\
                                    <div class="side-new-content">\
                                        <div class="side-link">Cat 2</div>\
                                        <i class="fa fa-hand-o-right"></i>\
                                    </div>\
                                    </a>\
                                    <a href="#">\
                                    <div class="side-new-content">\
                                        <div class="side-link">Cat 3</div>\
                                        <i class="fa fa-hand-o-right"></i>\
                                    </div>\
                                    </a>\
                                    <hr>'
}
