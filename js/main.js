(function () {
    "use strict";
    console.log('fired');

    let burger = document.querySelector("#button");
    let burgerCon = document.querySelector("#burger-con");

    function hamburgerMenu() {
        burger.classList.toggle("expanded");
        burgerCon.classList.toggle("slide-toggle");
    };

    burger.addEventListener("click", hamburgerMenu, false);
})();



const productTitle = document.querySelector('.beer-type');
const productDesc = document.querySelector('.alc-level');
const productImage = document.querySelector('#image-product');
const productButton = document.querySelector('#btn-cart');
const productInfo = document.querySelector('#productSee');
const buttonLeft = document.querySelector('#buttonL');
const buttonRight = document.querySelector('#setter'); //this is right arrow. 
const productPrice = document.querySelector('.price');
const productContainer = document.querySelector('#container-product');
let textIndex = 0;

const products = [
    {
        title: 'NON-ALCOHOL',
        description: 'ALC. VOL. 0%',
        image: 'images/pinknobg.png',
        buttonLabel: 'ADD TO CART +',
        animations: ['animate-left-to-right', 'animate-beating-cookie', 'animate-right-to-left-delay'],
        pricing: '$12.00',
       
        infoLabel: 'Non-Alcohol is a ultimate refreshment with our invigorating pink drink! Crafted from freshly squeezed fruit, this drink is a perfect blend of tangy and sweet'
        
    },
    {
        title: 'LIGHT BEER',
        description: 'ALC. VOL. 2.5%',
        image: 'images/lightnobg.png',
        buttonLabel: 'ADD TO CART +',
        animations: ['animate-left-to-right', 'animate-beating-cookie', 'animate-right-to-left-delay'],
        pricing: '$8.00',

        infoLabel: 'Light Beer is a popular type of beer with lesser alcohol yet crisp in taste and smooth finish. Brewed with bottom-fermenting yeast at cooler temperatures.'
   
    },
    {
        title: 'LAGER BEER',
        description: 'ALC. VOL. 5.5%.',
        image: 'images/yellow-nobg.png',
        buttonLabel: 'ADD TO CART +',
        animations: ['animate-left-to-right', 'animate-beating-cookie', 'animate-right-to-left-delay'],
        pricing: '$10.00',
      
        infoLabel: 'Lager is a popular type of beer known for its clean, crisp taste and smooth finish. Brewed with bottom-fermenting yeast at cooler temperatures.'
      
    }
];


function changeProduct() {
    const { title, description, image, infoLabel, animations, pricing  } = products[textIndex];
    productTitle.innerText = title;
    productDesc.innerText = description;
    productImage.src = image;
    productInfo.innerText = infoLabel;
    productPrice.innerText= pricing;


    const elements = [productTitle, productDesc, productButton, productImage, productInfo, productPrice, productContainer];
    elements.forEach(el => el.classList.remove(...animations));

    setTimeout(() => {
        productTitle.classList.add(animations[2]);
        productDesc.classList.add(animations[2]);
        productImage.classList.add(animations[1]);
        productButton.classList.add(animations[2]);
        productInfo.classList.add(animations[2]);
        productPrice.classList.add(animations[2]);
        productContainer.classList.add(animations[2]);

    }, 0);
}
function nextProduct(){
    textIndex = (textIndex + 1) % products.length;
    changeProduct();
    console.log('Next button clicked');
}

function prevProduct(){
    textIndex = (textIndex - 1 + products.length) % products.length;
    changeProduct();
    console.log('Prev button clicked');
}

buttonLeft.addEventListener('click', prevProduct);
buttonRight.addEventListener('click', nextProduct);
console.log('Event listeners added.');


window.addEventListener('load', () => {
    textIndex = 2;
    changeProduct();
});