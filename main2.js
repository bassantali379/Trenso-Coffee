let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        name: 'Test And Healthy',
        photos: 'img/menu-1.png',
        price: 18
    },
    {
        id: 2,
        name: 'Test And Healthy',
        photos: 'img/menu-2.png',
        price: 27
    },
    {
        id:3,
        name: 'Test And Healthy',
        photos: 'img/menu-3.png',
        price: 24
    },
    {
        id:4,
        name: 'Test And Healthy',
        photos: 'img/menu-4.png',
        price: 26
    },
    {
        id:5,
        name: 'Test And Healthy',
        photos: 'img/menu-5.png',
        price: 23
    },
    {
        id:6,
        name: 'Test And Healthy',
        photos: 'img/menu-6.png',
        price: 15
    },
    {
        id:7,
        name: 'Test And Healthy',
        photos: 'img/menu-3.png',
        price: 25
    },
    {
        id:8,
        name: 'Test And Healthy',
        photos: 'img/menu-5.png',
        price: 22
    },
    {
        id:9,
        name: 'Test And Healthy',
        photos: 'img/menu-2.png',
        price: 16
    },

];



let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.photos}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.photos}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);

        }
        total.innerHTML = totalPrice.toLocaleString();
        quantity.innerText = count;
    })




    // innerHTML    I=innerText

}


//  اخر فانكشن بتزود وتنقص

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}