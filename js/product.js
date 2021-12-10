let price_range = document.querySelectorAll(".range-input input");
const slider_range = document.querySelector(".price-slider .slider-range");
let price_input = document.querySelector(".price-range-wrapper input");

let clothings_filter_container = document.querySelector(".clothings-filter-container");
const filter_btn = document.querySelector(".fa-sliders");
filter_btn.addEventListener("click", () => {
    // clothings_filter_container.animation = 'superman-disappear 1s ease-in-out';
    clothings_filter_container.classList.toggle("show-hide");
});

// console.log(slider_range);
const HURDLE = 100;
price_range.forEach(input => {
    input.addEventListener("input", function (e) {
        let min_price = parseInt(price_range[0].value);
        let max_price = parseInt(price_range[1].value);
        // percent = (min_price / price_range[0].max) * 100;
        // // console.log(min_price, max_price);
        // console.log(percent);
        if (max_price - min_price < HURDLE) {
            if (e.target.className === 'range-min') {
                price_range[0].value = max_price - HURDLE;
                console.log("here");
            } else {
                price_range[1].value = min_price + HURDLE;
            }

        } else {
            slider_range.style.left = (min_price / price_range[0].max) * 100 + "%"; 
            slider_range.style.right = 100 - (max_price / price_range[1].max) * 100 + "%";
            price_input.value = `$${min_price} - $${max_price}`;
        }

    });
});