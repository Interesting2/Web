let preview_item_desc_info = document.getElementsByClassName('preview-item-desc-info');
let preview_item_details_info = document.getElementsByClassName('preview-item-details-info');
let preview_item_rating_info = document.getElementsByClassName('preview-item-rating-info');
let preview_item_content_header_desc = document.getElementsByClassName('preview-item-content-header-desc');
let preview_item_content_header_details = document.getElementsByClassName('preview-item-content-header-details');
let preview_item_content_header_reviews = document.getElementsByClassName('preview-item-content-header-reviews');

let preview_item_quantity = document.getElementsByClassName('preview-item-quantity');
let preview_item_quantity_input = document.querySelector('.preview-item-quantity input');

function openDesc() {
    preview_item_desc_info[0].style.display = 'block';
    preview_item_details_info[0].style.display = 'none';
    preview_item_rating_info[0].style.display = 'none';
    preview_item_content_header_reviews[0].style.backgroundColor = 'rgba(255, 255, 255, 0.63)';
    preview_item_content_header_details[0].style.backgroundColor = 'rgba(255, 255, 255, 0.63)';
    preview_item_content_header_desc[0].style.backgroundColor = 'rgba(234, 155, 53, 0.63)';
}

function openDetails() {
    preview_item_details_info[0].style.display = 'block';
    preview_item_desc_info[0].style.display = 'none';
    preview_item_rating_info[0].style.display = 'none';
    preview_item_content_header_reviews[0].style.backgroundColor = 'rgba(255, 255, 255, 0.63)';
    preview_item_content_header_desc[0].style.backgroundColor = 'rgba(255, 255, 255, 0.63)';
    preview_item_content_header_details[0].style.backgroundColor = 'rgba(234, 155, 53, 0.63)';
}

function openReviews() {
    preview_item_rating_info[0].style.display = 'block';
    preview_item_details_info[0].style.display = 'none';
    preview_item_desc_info[0].style.display = 'none';
    preview_item_content_header_details[0].style.backgroundColor = 'rgba(255, 255, 255, 0.63)';
    preview_item_content_header_desc[0].style.backgroundColor = 'rgba(255, 255, 255, 0.63)';
    preview_item_content_header_reviews[0].style.backgroundColor = 'rgba(234, 155, 53, 0.63)';

}

function showTextBox() {
    preview_item_quantity[0].style.display = 'block';
}

function closeTextBox() {
    // check if input text value is larger than 0
    if (preview_item_quantity_input.value > 0) {
        preview_item_quantity[0].style.display = 'none'; 
    } else {
        preview_item_quantity_input.style.border = '1px solid red';
        preview_item_quantity_input.placeholder = 'Must be > 0';
    }
}

let swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination4",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
});