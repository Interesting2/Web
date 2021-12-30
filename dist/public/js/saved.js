
let saved_list_container = document.getElementById('saved-list-container');
let saved_list_wrapper = document.querySelector('.saved-list-wrapper');

function openSavedList() {
    viewPort[0].style.height = '100vh';
    viewPort[0].style.overflow = 'hidden';
    saved_list_container.style.display = 'flex';
}

closeSavedList = () => {
    saved_list_wrapper.style.animation = 'card-slide-out 0.5s linear';
    setTimeout(() => {
        saved_list_container.style.display = 'none';
        saved_list_wrapper.style.animation = 'card-slide-in 0.5s linear';
        viewPort[0].style.height = '';
        viewPort[0].style.overflow = 'scroll';
    }, 500)
}

// saved_list_container.addEventListener('click', () => {
//     closeSavedList();
// });