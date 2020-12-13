// Selectors
const addOne = document.querySelector('.button_up');
const downOne = document.querySelector('.button_down');
const leftArrow = document.querySelector('.left_arrow_icon');
const rightArrow = document.querySelector('.right_arrow_icon');
const smallGreyImg = document.querySelector('.small_grey_img');
const smallPinkImg = document.querySelector('.small_pink_img');
const quantity = document.querySelector('.counter_input');
const initalAmount = document.querySelector('.total');
const img = document.querySelector('.main_image');
const heartButton = document.querySelector('.heart_button');
const addOns = document.querySelector('.cartsection_addOns');
const addOn1 = document.querySelector('.addOns_1');
const addOn2 = document.querySelector('.addOns_2');
const addOn3 = document.querySelector('.addOns_3');
const addOn4 = document.querySelector('.addOns_4');
const addOnTotal = document.querySelector('.addOnTotal');
const cartButton = document.querySelector('.cart_button');
const body = document.querySelector('main');

// Event Listeners
addOne.addEventListener('click', quantityUpOne);
downOne.addEventListener('click', quantityDownOne);
heartButton.addEventListener('click', changeButtonColour);
leftArrow.addEventListener('click', toggleLeftImage);
rightArrow.addEventListener('click', toggleRightImage);
smallGreyImg.addEventListener('click', toggleLeftImage);
smallPinkImg.addEventListener('click', toggleRightImage);

let price = 799;

// Change Quantaties
function quantityUpOne() {
    let counter = quantity.value;
    let total = parseInt(initalAmount.innerHTML);
    counter++
    const newTotal = total + price;
    quantity.value = counter;
    initalAmount.innerHTML = newTotal;
}
function quantityDownOne() {
    let counter = quantity.value;
    let total = parseInt(initalAmount.innerHTML);
    if(quantity.value > 1) {
        const newTotal = total - price;
        counter--
        quantity.value = counter;
        initalAmount.innerHTML = newTotal
    }
}

// Change Main Image
function toggleLeftImage() {
    img.src = './images/chair_grey.jpg';
    smallPinkImg.style.border = 'none';
    smallGreyImg.style.border = '2px solid #250858';
}
function toggleRightImage() {
    img.src = './images/chair_pink.jpg';
    smallGreyImg.style.border = 'none';
    smallPinkImg.style.border = '2px solid #250858';
}

// On Heart Button Click
function changeButtonColour() {
    heartButton.classList.toggle('heart_button_active');
}

// Add Add ons to list
function showAddOns() {
    addOns.style.display = 'block';
    cartButton.style.backgroundColor = '#250858'
    body.style.height = '121.3em'
}
function addFabric() {
    showAddOns();
    addAmount(30);
    addOn1.innerHTML = 'Steelcut Trio (+ £30.00)';
}
function addColour() {
    showAddOns();
    addOn2.innerHTML = 'SCT526';
}
function addFinish() {
    showAddOns();
    addOn3.innerHTML = 'Matt Lacuered Oak';
}
function addSeatCushion() {
    showAddOns();
    addAmount(109);
    addOn4.innerHTML = 'In same fabric, Group 4 (+ £109.00)';
    
}
function addAmount(num) {
    price = price + num;
    addOnTotal.innerHTML = price;
    initalAmount.innerHTML = price;
    quantity.value = 1;
    return price;
}