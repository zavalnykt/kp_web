var burger = document.getElementById("burger");
var menu = document.getElementById("side-menu");
var closeIcon = document.getElementById("close-icon"); 

burger.addEventListener("click", function() {
    this.classList.toggle("active");
    menu.classList.toggle("show");
});
function closeMenu() {
    burger.classList.remove("active");
    menu.classList.remove("show");
}
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        closeMenu();
    }
});
closeIcon.addEventListener("click", function () {
    closeMenu();
});

const productsPage1 = [
    { name: "Котяче ліжко", price: 1230, image: "../images/productS/catBed.webp" },
    { name: "Миска для котів", price: 120, image: "../images/productS/catBowl.webp" },
    { name: "Миска для котів", price: 110, image: "../images/productS/catBowl2.webp" },
    { name: "Корм для котів", price: 540, image: "../images/productS/catFood.webp" },
    { name: "Корм для собак", price: 620, image: "../images/productS/corm.webp" },
    { name: "Ліжко для собак", price: 1560, image: "../images/productS/dogBed.webp" },
    { name: "Миска для собак", price: 130, image: "../images/productS/dogBowl.webp" },
    { name: "Миска для собак", price: 125, image: "../images/productS/DogBowl2.webp" },
    { name: "Повідок для собак", price: 250, image: "../images/productS/dogLeach.webp" },
    { name: "Ліжко для хом'яків", price: 340, image: "../images/productS/hamsterBed.webp" },
    { name: "Миска для хом'яків", price: 90, image: "../images/productS/HamsterBowl.webp" },
    { name: "Корм для хом'яків", price: 450, image: "../images/productS/HamsterFood.webp" }
];

const productsPage2 = [
    { name: "Ліжко для попугая", price: 450, image: "../images/productS/parrotBed.webp" },
    { name: "Корм для попугая", price: 340, image: "../images/productS/parrotFood.webp" },
    { name: "Переноска для тварин", price: 1900, image: "../images/productS/petCarrier.webp" },
    { name: "Миска для попугая", price: 330, image: "../images/productS/parrotBowl.webp" },
    { name: "Корм для кролика", price: 410, image: "../images/productS/rabbirFood.webp" },
    { name: "Ліжко для кролика", price: 560, image: "../images/productS/rabbitBed.webp" },
    { name: "Миска для кролика", price: 70, image: "../images/productS/RabbitBowl.webp" },
    { name: "Акваріум", price: 2560, image: "../images/productS/turtleBed.webp" },
    { name: "Миска для черепах", price: 50, image: "../images/productS/turtleBowk.webp" },
    { name: "Корм для черепах", price: 230, image: "../images/productS/turtleFood.webp" },
    { name: "Іграшки", price: 150, image: "../images/productS/toys1.webp" },
    { name: "Іграшки", price: 124, image: "../images/productS/toys2.webp" }
];


function loadProducts(page) {
    const productsContainer = document.getElementById('productsContainer');
    productsContainer.innerHTML = '';


    const productsToShow = page === 1 ? productsPage1 : productsPage2;


    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-carD');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="im">
            <h4>${product.name}</h4>
            <p>₴${product.price}</p>
            <button class="wishlist-btn" data-product-name="${product.name}">
                <span class="heart-icon"></span> 
            </button>
        `;
        productsContainer.appendChild(productCard);
    });
}


document.getElementById('productsContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('wishlist-btn')) {
        const productName = event.target.getAttribute('data-product-name');
        const heartIcon = event.target.querySelector('.heart-icon');
        if (wishlist.includes(productName)) {
            wishlist = wishlist.filter(item => item !== productName);
            heartIcon.innerHTML = '&#x2764;'; 
        } else {
            wishlist.push(productName);
            heartIcon.innerHTML = '&#x2764;&#xFE0F;'; 
        }
    }
});


const pageLinks = document.querySelectorAll('.page-link');
pageLinks.forEach(button => {
    button.addEventListener('click', function() {
        const page = parseInt(this.getAttribute('data-page'));
        
        
        loadProducts(page);

        
        pageLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


loadProducts(1);

document.querySelector('.page-link[data-page="1"]').classList.add('active');
const filterToggle = document.getElementById('filterToggle');
const filterContainer = document.getElementById('filterContainer');

document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.getElementById('filterButton');
    const filterSidebar = document.getElementById('filterSidebar');
    const closeFilterButton = document.getElementById('closeFilterButton');

    if (filterButton && filterSidebar && closeFilterButton) {
        filterButton.addEventListener('click', () => {
            filterSidebar.style.left = '0px'; 
        });

        closeFilterButton.addEventListener('click', () => {
            filterSidebar.style.left = '-300px'; 
        });
    } else {
        console.error('Елементи filterButton, filterSidebar або closeFilterButton не знайдено.');
    }
});

const priceRange = document.getElementById('price-range');
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');

priceRange.addEventListener('input', function () {
    const currentValue = this.value;
    minPrice.textContent = `${currentValue}₴`;
});


