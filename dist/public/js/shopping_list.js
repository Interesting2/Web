let shop_list_container = document.getElementById('shop-list-container');
let shop_list_wrapper = document.querySelector('.shop-list-wrapper');
// console.log(shop_list_container);
function openShopList() {
    shop_list_container.style.display = 'flex';
    viewPort[0].style.height = "100vh";
    viewPort[0].style.overflow = "hidden";
}

function closeShopList() {
    shop_list_wrapper.style.animation = 'card-slide-out 0.5s linear';
    setTimeout(() => {
        shop_list_container.style.display = 'none';
        viewPort[0].style.height = "";
        viewPort[0].style.overflow = "scroll";
        shop_list_wrapper.style.animation = 'card-slide-in 0.5s linear';
    }, 500);        
}


// shop_list_container.addEventListener('click', () => {
//     closeShopList();
// });