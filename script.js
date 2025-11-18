// DATELE PENTRU MENIU
const menuData = {
    cafea: [
        {
            id: 1,
            name: "Espresso",
            description: "Cafea puternică și aromată, preparată din boabe de cafea proaspăt măcinate",
            price: 12,
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            name: "Cappuccino",
            description: "Espresso cu spumă de lapte cremoasă și pudră de cacao",
            price: 15,
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            name: "Latte",
            description: "Cafea cu lapte și artă în spumă, perfectă pentru dimineața",
            price: 16,
            image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            name: "Americano",
            description: "Espresso diluat cu apă fierbinte pentru un gust mai ușor",
            price: 10,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            name: "Mocha",
            description: "Cafea cu ciocolată și lapte, o combinație delicioasă",
            price: 18,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            name: "Macchiato",
            description: "Espresso cu un pic de spumă de lapte pentru echilibru perfect",
            price: 14,
            image: "https://images.unsplash.com/photo-1560769624-6b69c5d6a486?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    ceai: [
        {
            id: 7,
            name: "Ceai Negru",
            description: "Aromă intensă și bogată, perfect pentru începutul zilei",
            price: 8,
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            name: "Ceai Verde",
            description: "Proaspăt și revigorant, cu beneficii pentru sănătate",
            price: 9,
            image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 9,
            name: "Ceai de Fructe",
            description: "Bogat în arome de fructe proaspete, fără cofeină",
            price: 10,
            image: "https://images.unsplash.com/photo-1597481499750-3e11b15f1d16?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    racoritoare: [
        {
            id: 10,
            name: "Limonadă Proaspătă",
            description: "Lămâie proaspătă și mentă, răcoritoare și revigorantă",
            price: 12,
            image: "https://images.unsplash.com/photo-1523371683702-309cffa2f6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 11,
            name: "Suc Natural",
            description: "Din fructe proaspete, fără adaos de zahăr",
            price: 10,
            image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 12,
            name: "Apă Minerală",
            description: "Cu sau fără gaz, la alegere",
            price: 5,
            image: "https://images.unsplash.com/photo-1548839149-851a64d0da60?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ],
    gustari: [
        {
            id: 13,
            name: "Croissant",
            description: "Proaspăt și crocant, cu unt de cea mai bună calitate",
            price: 8,
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 14,
            name: "Tort Ciocolată",
            description: "Cu ciocolată belgiană și cremă de vanilie",
            price: 15,
            image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 15,
            name: "Muffin",
            description: "Cu afine sau ciocolată, proaspăt coapt",
            price: 10,
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ]
};

// VARIABILE GLOBALE
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// INITIALIZARE APLICAȚIE
document.addEventListener('DOMContentLoaded', function() {
    initializeMenu();
    setupEventListeners();
    updateCartDisplay();
    initializeScrollAnimations();
});

// INITIALIZARE MENIU
function initializeMenu() {
    // Populare categorii de meniu
    for (const category in menuData) {
        const container = document.getElementById(`${category}-items`);
        if (container) {
            container.innerHTML = '';
            
            menuData[category].forEach(item => {
                const menuItem = createMenuItem(item);
                container.appendChild(menuItem);
            });
        }
    }
}

// CREARE ELEMENT MENIU
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
        <div class="item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="item-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="item-footer">
                <span class="price">${item.price} lei</span>
                <button class="add-to-cart" data-id="${item.id}">
                    <i class="fas fa-cart-plus"></i> Adaugă
                </button>
            </div>
        </div>
    `;
    return menuItem;
}

// SETARE EVENT LISTENERS
function setupEventListeners() {
    // Butoane categorii meniu
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuSections = document.querySelectorAll('.menu-items');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            switchCategory(this, categoryBtns, menuSections);
        });
    });

    // Adăugare în coș
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
            const itemId = parseInt(button.getAttribute('data-id'));
            addToCart(itemId);
        }
        
        // Butoane cantitate coș
        if (e.target.classList.contains('quantity-btn') || e.target.closest('.quantity-btn')) {
            const button = e.target.classList.contains('quantity-btn') ? e.target : e.target.closest('.quantity-btn');
            const itemId = parseInt(button.closest('.cart-item').getAttribute('data-id'));
            
            if (button.querySelector('.fa-plus') || button.textContent === '+') {
                updateQuantity(itemId, 1);
            } else {
                updateQuantity(itemId, -1);
            }
        }
        
        // Ștergere din coș
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const button = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            const itemId = parseInt(button.closest('.cart-item').getAttribute('data-id'));
            removeFromCart(itemId);
        }
    });
    
    // Deschidere/închidere coș
    document.getElementById('cartIcon').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    
    // Finalizare comandă
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    
    // Formular de contact
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm(this);
        });
    }

    // Închidere coș la click în afara
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartIcon = document.getElementById('cartIcon');
        
        if (cartSidebar.classList.contains('open') && 
            !cartSidebar.contains(e.target) && 
            !cartIcon.contains(e.target)) {
            closeCart();
        }
    });

    // Navigare smooth
    setupSmoothScrolling();
}

// SCHIMBARE CATEGORIE MENIU
function switchCategory(clickedBtn, allBtns, allSections) {
    // Elimină clasa active de la toate butoanele
    allBtns.forEach(b => b.classList.remove('active'));
    // Adaugă clasa active la butonul apăsat
    clickedBtn.classList.add('active');
    
    // Ascunde toate secțiunile de meniu
    allSections.forEach(section => section.classList.add('hidden'));
    
    // Afișează categoria selectată
    const category = clickedBtn.getAttribute('data-category');
    const targetSection = document.getElementById(`${category}-items`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        
        // Animație pentru elementele noi afișate
        animateMenuItems(targetSection);
    }
}

// ANIMARE ELEMENTE MENIU
function animateMenuItems(container) {
    const items = container.querySelectorAll('.menu-item');
    items.forEach((item, index) => {
        item.style.animation = 'none';
        setTimeout(() => {
            item.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
        }, 50);
    });
}

// SETARE NAVIGARE SMOOTH
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// INITIALIZARE ANIMAȚII LA SCROLL
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observă elementele cu animații
    const animatedElements = document.querySelectorAll('.menu-item, .feature, .contact-item, .gallery-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// FUNCȚII COȘ DE CUMPĂRĂTURI
function addToCart(itemId) {
    // Găsește produsul în toate categoriile
    let product = null;
    for (const category in menuData) {
        product = menuData[category].find(item => item.id === itemId);
        if (product) break;
    }
    
    if (!product) return;
    
    // Verifică dacă produsul există deja în coș
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showNotification(`${product.name} a fost adăugat în coș!`);
    animateCartIcon();
}

function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartDisplay();
    }
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        updateCartDisplay();
        showNotification('Produsul a fost eliminat din coș!');
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCountElement = document.querySelector('.cart-count');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    // Actualizare număr produse
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = cartCount;
    
    // Actualizare conținut coș
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-coffee"></i>
                <p>Coșul tău este gol</p>
                <p>Adaugă produse din meniu</p>
            </div>
        `;
        checkoutBtn.disabled = true;
    } else {
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = createCartItem(item);
            cartItemsContainer.appendChild(cartItem);
        });
        
        checkoutBtn.disabled = false;
    }
    
    // Calcul totaluri
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // TVA 10%
    const total = subtotal + tax;
    
    cartTotal = total;
    
    subtotalElement.textContent = `${subtotal.toFixed(2)} lei`;
    taxElement.textContent = `${tax.toFixed(2)} lei`;
    totalElement.textContent = `${total.toFixed(2)} lei`;
}

// CREARE ELEMENT COȘ
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.setAttribute('data-id', item.id);
    cartItem.innerHTML = `
        <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>${item.price} lei</p>
        </div>
        <div class="cart-item-controls">
            <button class="quantity-btn"><i class="fas fa-minus"></i></button>
            <span>${item.quantity}</span>
            <button class="quantity-btn"><i class="fas fa-plus"></i></button>
            <button class="remove-item"><i class="fas fa-trash"></i></button>
        </div>
    `;
    return cartItem;
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
}

function checkout() {
    if (cart.length === 0) return;
    
    showNotification(`Comanda a fost plasată! Total: ${cartTotal.toFixed(2)} lei`, true);
    
    // Simulare procesare plată
    simulatePaymentProcessing();
}

// SIMULARE PROCESARE PLATĂ
function simulatePaymentProcessing() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const originalText = checkoutBtn.textContent;
    
    checkoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Se procesează...';
    checkoutBtn.disabled = true;
    
    setTimeout(() => {
        // Resetare coș după finalizare
        cart = [];
        updateCartDisplay();
        closeCart();
        
        checkoutBtn.innerHTML = originalText;
        checkoutBtn.disabled = false;
    }, 2000);
}

// ANIMAȚIE ICONIȚĂ COȘ
function animateCartIcon() {
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// NOTIFICĂRI
function showNotification(message, isError = false) {
    const notification = document.getElementById('notification');
    const icon = notification.querySelector('i');
    const text = notification.querySelector('span');
    
    text.textContent = message;
    
    if (isError) {
        notification.classList.add('error');
        icon.className = 'fas fa-exclamation-circle';
    } else {
        notification.classList.remove('error');
        icon.className = 'fas fa-check-circle';
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// GESTIONARE FORMULAR CONTACT
function handleContactForm(form) {
    const formData = new FormData(form);
    const name = formData.get('name') || 'Nume';
    
    showNotification(`Mulțumim pentru mesaj, ${name}! Te vom contacta în curând.`);
    form.reset();
}

// MANAGEMENT STOCARE LOCALĂ
function saveCartToStorage() {
    localStorage.setItem('laCatalinCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('laCatalinCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// SALVARE AUTOMATĂ COȘ
function autoSaveCart() {
    saveCartToStorage();
}

// Adăugare auto-save la modificări coș
const originalUpdateCartDisplay = updateCartDisplay;
updateCartDisplay = function() {
    originalUpdateCartDisplay();
    autoSaveCart();
};

// ÎNCĂRCARE COȘ LA INITIALIZARE
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
});

console.log('La Catalin - Cafenea Moldovenească loaded successfully!');