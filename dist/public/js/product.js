let price_range = document.querySelectorAll(".range-input input");
const slider_range = document.querySelector(".price-slider .slider-range");
let price_input = document.querySelector(".price-range-wrapper input");

let clothings_filter_container = document.querySelector(".clothings-filter-container");

const load_more = document.querySelector(".load-more");
const filter_btn = document.querySelector(".fa-sliders");

const loading_animation = document.querySelector(".loading-animation");

let recentId = 0;
const maxAmount = 3;

function calcRating(rating) {
    // calculate how many i tags to create based on the rating. Total rating is 5
    // if rating is one, then create <i class="fa fa-star"></i>
    // if rating is two, then create <i class="fa fa-star"></i>, <i class="fa fa-star"></i>, <i class="fa fa-star-o"></i>, <i class="fa fa-star-o"></i>, and <i class="fa fa-star-o"></i>
    // if rating is five, then create 5 <i class="fa fa-star"></i>
    // <i class="fa fa-star-half-o"></i> is half a rating
    // <i class="fa fa-star-o"></i> is no rating
    let rating_html = "";
    for (let i = 0; i < rating; i++) {
        rating_html += `<i class="fa fa-star"></i>`;
    }
    if (rating !== parseInt(rating)) {
        rating_html += `<i class="fa fa-star-half-o"></i>`;
    }
    for (let i = 0; i < (5 - rating); i++) {
        rating_html += `<i class="fa fa-star-o"></i>`;
    }
    console.log(rating_html);
    return rating_html;
}

function loadMoreClothings(data) {
    console.log(data);
    const clothing_animation = document.querySelectorAll('.clothings-animation');
    if (clothing_animation) {
        for (let i = 0; i < clothing_animation.length; i++) {
            clothing_animation[i].classList.remove("clothings-animation");
        }
    }
    data.forEach(element => {
        recentId = Math.max(recentId, element.id);
        // check for review ratings
        let rating_html = calcRating(element.rating);

        let clothings_container = document.querySelector(".clothings-container");

        clothings_container.innerHTML += `
            <div class="clothings-content clothings-animation">
                <i class="fa fa-heart-o" id="remove-heart"></i>
                <i class="fa fa-heart" id="add-heart"></i>
                <img src="${element.imagesource}" class="clothings-image" alt="adidas_shoes">
                <div class="clothing-product-content" id="temp-clothing">
                    ${rating_html}
                    <div class="clothing-product-item-details">
                        <div class="left-hand">
                            <div class="product-name">${element.name}</div>
                            <div class="product-price">$${element.price}</div>
                        </div>
                        <i class="fa fa-shopping-cart featured-overlay-cart"></i>
                        <div class="featured-quantity">
                            <i class="fa fa-minus-square featured-minus-square"></i>
                            <div class="featured-product-counter">0</div>
                            <i class="fa fa-plus-square featured-plus-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
        
    });
}

load_more.addEventListener("click", () => {
    // fetch data from express server
    load_more.style.display = "none";
    loading_animation.style.display = "block";

    const info = {'amount': maxAmount, 'id': recentId};
    const data = JSON.stringify(info);
    console.log("Send request data: " + data);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        status: 200
    }
    setTimeout(() => {
        fetch('/clothings/clothing', options)
            .then(response => {
                console.log("Hello response");
                return response.json()
            })
            .then(data => {
                console.log("Hello json data");
                console.log(data);
                loadMoreClothings(data);
                console.log("finally");
                recentId ++;
                loading_animation.style.display = "none";
                load_more.style.display = 'block';
    
            })
            .catch(err => {
                console.log(`Error in fetching \n ${err}`);
            })
    }, 3000)
});


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