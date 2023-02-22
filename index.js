var totalImages = 5;
var counter = 2;

function autoplayCarousel() {
    if (counter > totalImages) counter = 1;
    document.getElementById('slide' + counter++).checked = true;
}

// Manual button handler
function updateCounter(val) {
    // document.getElementById('slide' + val).checked = true;
    counter = val;
}

// AutoPlay
setInterval(autoplayCarousel, 5000);