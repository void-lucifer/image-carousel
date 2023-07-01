//============================= Carousel generators =============================//
function carouselGenerator(img_arr) {
    let radio_str = '';
    let img_str = '';
    let label_str = '';

    for (let i = 0; i < img_arr.length; i++) {
        if (i == 0) {
            radio_str += `<input type="radio" name="slide-radio" id="slide${i}" checked>`;
            img_str += `<div class="slide first"><img src="${img_arr[i]}"></div>`;
        }
        else {
            radio_str += `<input type="radio" name="slide-radio" id="slide${i}">`;
            img_str += `<div class="slide"><img src="${img_arr[i]}"></div>`;

        }
        label_str += `<label for="slide${i}" id="manual-btn${i}" class="manual-btn" onClick="updateCounter(${i})"></label>`;
    }
    
    return document.getElementById("image-container").innerHTML = `${radio_str}${img_str} <div class="nav-manual">${label_str}</div>`;
}

//================================= Image Data Array =================================//
const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg"
];

//=============================== Carousel Mount ===============================//
carouselGenerator(images);
var counter = 1;

function autoplayCarousel() {
    if (counter > 4) counter = 0;
    document.getElementById('slide' + counter++).checked = true;
}

//===========Manual button handler
function updateCounter(val) {
    counter = val;
}

//=============AutoPlay
setInterval(autoplayCarousel, 3000);