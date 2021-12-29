let price_range = document.querySelectorAll(".range-input input");
const slider_range = document.querySelector(".price-slider .slider-range");
let price_input = document.querySelector(".price-range-wrapper input");

let clothings_filter_container = document.querySelector(".clothings-filter-container");

const load_more = document.querySelector(".load-more");
const filter_btn = document.querySelector(".fa-sliders");

const loading_animation = document.querySelector(".loading-animation");

let clothing_header_content = document.querySelector(".clothings-header h2 span");
let num_of_results = document.querySelector(".num-of-results p span");

let recentId = null;
const maxAmount = 7;

let clothing_quantity = document.getElementsByClassName("clothing-quantity");
let clothing_overlay_cart = document.getElementsByClassName("clothing-overlay-cart");
let clothing_plus_square = document.getElementsByClassName("clothing-plus-square");
let clothing_minus_square = document.getElementsByClassName("clothing-minus-square");
let clothing_product_counter = document.getElementsByClassName("clothing-product-counter");

let remove_heart = document.querySelectorAll("#remove-heart");
let add_heart = document.querySelectorAll("#add-heart");


function loadClothingDOM() {
    clothing_quantity = document.getElementsByClassName("clothing-quantity");
    clothing_overlay_cart = document.getElementsByClassName("clothing-overlay-cart");
    clothing_plus_square = document.getElementsByClassName("clothing-plus-square");
    clothing_minus_square = document.getElementsByClassName("clothing-minus-square");
    clothing_product_counter = document.getElementsByClassName("clothing-product-counter");
    
    remove_heart = document.querySelectorAll("#remove-heart");
    add_heart = document.querySelectorAll("#add-heart"); 
}

function updateClothingDOM() {

    for (let i = 0; i < remove_heart.length; i++) {
        remove_heart[i].addEventListener("click", () => {
            // remove_heart display none and add_heart display block
            remove_heart[i].style.display = "none";
            add_heart[i].style.display = "inline";
        })
        add_heart[i].addEventListener("click", () => {
            // remove_heart display none and add_heart display block
            add_heart[i].style.display = "none";
            remove_heart[i].style.display = "inline";
        })
    }


    for (let i = 0; i < clothing_overlay_cart.length; i ++) {
        let clothingEachQuantity = clothing_quantity[i];
        let clothingEachCart = clothing_overlay_cart[i];
        let clothingEachPlus = clothing_plus_square[i];
        let clothingEachMinus = clothing_minus_square[i]
        let clothingEachCounter = clothing_product_counter[i];
        
        clothingEachCart.addEventListener('click', () => {
            clothingEachCart.style.display = 'none';
            clothingEachQuantity.style.display = 'flex';

            for (let j = 0; j < clothing_overlay_cart.length; j ++) {
                if (i != j) {
                    clothing_overlay_cart[j].style.display = 'block';
                    clothing_quantity[j].style.display = 'none';
                }
            }
        });

        clothingEachPlus.addEventListener('click', () => {
            clothingEachCounter.innerHTML = parseInt(clothingEachCounter.innerHTML) + 1;
        });

        clothingEachMinus.addEventListener('click', () => {
            let sales = parseInt(clothingEachCounter.innerHTML) - 1;
            if (sales >= 0) clothingEachCounter.innerHTML = parseInt(clothingEachCounter.innerHTML) - 1;
        });
    }
}


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
    // console.log(data);
    function postProcess() {
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
                        <div class="clothing-item-details">
                            <div class="left-hand">
                                <div class="product-name">${element.name}</div>
                                <div class="product-price">$${element.price}</div>
                            </div>
                            <i class="fa fa-shopping-cart clothing-overlay-cart"></i>
                            <div class="clothing-quantity">
                                <i class="fa fa-minus-square clothing-minus-square"></i>
                                <div class="clothing-product-counter">0</div>
                                <i class="fa fa-plus-square clothing-plus-square"></i>
                            </div>
                        </div>
                        <button class="preview-item-btn">Preview Item</button>
                
                    </div>
                    
                </div>
            `
        });

        if (data.length > 0) {
            updateResults(data.length);
            recentId ++;
            loading_animation.style.display = "none";
            load_more.style.display = 'block';
            loadClothingDOM();
            updateClothingDOM();
        } else {
            // no more data available 
            load_more.style.display = "none";
            loading_animation.style.display = "none";
        } 
    }
    setTimeout(postProcess, 3000);
}

function updateResults(num_returned) {
    clothing_header_content.innerHTML = parseInt(clothing_header_content.innerHTML) + num_returned;
    num_of_results.innerHTML = parseInt(num_of_results.innerHTML) + num_returned;

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
    fetch('/clothings/clothing', options)
        .then(response => {
            console.log("Hello response");
            return response.json()
        })
        .then(data => {
            console.log("Hello json data");
            console.log(data);
            loadMoreClothings(data);
            // console.log("finally");
        })
        .catch(err => {
            console.log(`Error in fetching \n ${err}`);
        })
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

window.onload = () => {
    recentId = parseInt(clothing_header_content.innerHTML) + 1;
    clothing_header_content.innerHTML = num_of_results.innerHTML;
    updateClothingDOM(); // 
}