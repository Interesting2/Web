
let saved_list_container = document.getElementById('saved-list-container');
let saved_list_wrapper = document.querySelector('.saved-list-wrapper');

function openSavedList() {
    saved_list_wrapper.style.display = 'block';
}

closeSavedList = () => {
    saved_list_wrapper.style.animation = 'card-slide-out 0.5s linear';
    setTimeout(() => {
        saved_list_wrapper.style.display = 'none';
        saved_list_wrapper.style.animation = 'card-slide-in 0.5s linear';
    }, 500)
}

// saved_list_container.addEventListener('click', () => {
//     closeSavedList();
// });