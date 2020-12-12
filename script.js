const addOne = document.querySelector('.button_up');
const downOne = document.querySelector('.button_down');
const quantity = document.querySelector('.counter_input');
const initalAmount = document.querySelector('.total');

addOne.addEventListener('click', () => {
    let counter = quantity.value;
    let total = parseInt(initalAmount.innerHTML);
    counter++
    const newTotal = total + 779;
    quantity.value = counter;
    initalAmount.innerHTML = newTotal
})

downOne.addEventListener('click', () => {
    let counter = quantity.value;
    let total = parseInt(initalAmount.innerHTML);
    if(quantity.value > 1) {
        const newTotal = total - 779;
        counter--
        quantity.value = counter;
        initalAmount.innerHTML = newTotal
    }
})

// quantity.addEventListener('change', changePrice);

// function changePrice() {
//     const newPrice = quantity * 779;
// }