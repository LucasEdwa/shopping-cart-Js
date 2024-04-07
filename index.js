let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
}
);
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [{
    id: 1,
    name: 'Product 1',
    image:'products/f1.jpg',
    price: 100,

},
{
    id: 2,
    name: 'Product 2',
    image:'products/f2.jpg',
    price: 200,

},
{
    id: 3,
    name: 'Product 3',
    image:'products/f3.jpg',
    price: 100,

},
{
    id: 4,
    name: 'Product 4',
    image:'products/f2.jpg',
    price: 100,

},
{
    id: 5,
    name: 'Product 5',
    image:'products/f5.jpg',
    price: 200,

},
{
    id: 6,
    name: 'Product 6',
    image:'products/f6.jpg',
    price: 300,

}
];
let listCards =[];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('pro');
        newDiv.innerHTML=`
            <img src="${value.image}" alt=" no pic avaible">
            <div class="title">${value.name}</h3>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to card</button>

        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null)
    {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();

}
function reloadCard(){
    listCard.innerHTML='';
    let count = 0;
    let totalPrice = 0   ;
    listCards.forEach((value,key)=>{
        
        if (value != null){
            totalPrice +=  value.price;
            count += value.quantity;
            let newDiv = document.createElement('li');
            newDiv.classList.add('item');
            newDiv.innerHTML=`
                <div> <img src="${value.image}" alt=" no pic avaible"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity -1})">-</button>
                    <div class = "count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity +1})">+</button>
                    
                </div>`
                ;
            
            listCard.appendChild(newDiv);

        }
    });
    total.innerHTML = totalPrice.toLocaleString();
    quantity.innerHTML = count;

}
function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}