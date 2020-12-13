const addOne = document.querySelector('.button_up');
const downOne = document.querySelector('.button_down');
const quantity = document.querySelector('.counter_input');
const initalAmount = document.querySelector('.total');
const img = document.querySelector('.main_image');
const buttons = document.querySelector('.buttons');
const addOns = document.querySelector('.cartsection_addOns');
const addOn1 = document.querySelector('.addOns_1');
const addOn2 = document.querySelector('.addOns_2');
const addOn3 = document.querySelector('.addOns_3');
const addOn4 = document.querySelector('.addOns_4');
const addOnTotal = document.querySelector('.addOnTotal');
const cartButton = document.querySelector('.cart_button');
const body = document.querySelector('main');

let price = 799;

addOne.addEventListener('click', () => {
    let counter = quantity.value;
    let total = parseInt(initalAmount.innerHTML);
    counter++
    const newTotal = total + price;
    quantity.value = counter;
    initalAmount.innerHTML = newTotal;
})

downOne.addEventListener('click', () => {
    let counter = quantity.value;
    let total = parseInt(initalAmount.innerHTML);
    if(quantity.value > 1) {
        const newTotal = total - price;
        counter--
        quantity.value = counter;
        initalAmount.innerHTML = newTotal
    }
})

// Change Images
function grey() {
    img.src = './images/chair_grey.jpg';
}

function pink() {
    img.src = './images/chair_pink.jpg';
}

// On Button Click
function changeButtonColour() {
    buttons.classList.toggle('heart_button');
}

function showAddOns() {
    addOns.style.display = 'block';
    cartButton.style.backgroundColor = '#250858'
    body.style.height = '115em'
}

function addFabric() {
    showAddOns();
    addAmount(30);
    addOn1.style.display = 'block';
}

function addColour() {
    showAddOns();
    addOn2.style.display = 'block';
}

function addFinish() {
    showAddOns();
    addOn3.style.display = 'block';
}

function addSeatCushion() {
    showAddOns();
    addAmount(109);
    addOn4.style.display = 'block';
    
}

function addAmount(num) {
    price = price + num;
    addOnTotal.innerHTML = price;
    initalAmount.innerHTML = price;
    quantity.value = 1;
    return price;
}

function test() {
    console.log(price);
}