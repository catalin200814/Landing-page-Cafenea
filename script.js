// ===== LOCAL STORAGE =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function saveFormData() {
    const name = document.getElementById('name')?.value || '';
    const email = document.getElementById('email')?.value || '';
    localStorage.setItem('contactFormData', JSON.stringify({ name, email }));
}

function loadFormData() {
    const savedData = JSON.parse(localStorage.getItem('contactFormData'));
    if (savedData) {
        if (document.getElementById('name')) {
            document.getElementById('name').value = savedData.name || '';
        }
        if (document.getElementById('email')) {
            document.getElementById('email').value = savedData.email || '';
        }
    }
}

function updateCartCount() {
    let cartCountElement = document.getElementById('cart-count');
    if (!cartCountElement) {
        const nav = document.querySelector('.nav-links');
        if (nav) {
            cartCountElement = document.createElement('span');
            cartCountElement.id = 'cart-count';
            cartCountElement.style.marginLeft = '15px';
            cartCountElement.style.backgroundColor = '#e8c39e';
            cartCountElement.style.color = '#4a3729';
            cartCountElement.style.padding = '4px 10px';
            cartCountElement.style.borderRadius = '20px';
            cartCountElement.style.fontWeight = 'bold';
            nav.appendChild(cartCountElement);
        }
    }
    if (cartCountElement) {
        cartCountElement.textContent = `🛒 ${cart.length}`;
    }
}

// ===== DATELE PENTRU PRODUSE =====
const productsData = [
    { name: 'Espresso', desc: 'Intens și aromat', price: '12 Lei', imgClass: 'coffee1', dataName: 'espresso' },
    { name: 'Cappuccino', desc: 'Espresso cu spumă de lapte', price: '15 Lei', imgClass: 'coffee2', dataName: 'cappuccino' },
    { name: 'Latte Macchiato', desc: 'Lapte fin cu espresso', price: '16 Lei', imgClass: 'coffee3', dataName: 'latte macchiato' },
    { name: 'Ciocolată Caldă', desc: 'Cu frișcă și sirop', price: '14 Lei', imgClass: 'coffee4', dataName: 'ciocolata calda' }
];

// ===== GENERARE CONȚINUT =====
function generateContent() {
    const main = document.getElementById('main-content');
    
    // Hero Section
    const heroSection = document.createElement('section');
    heroSection.id = 'home';
    heroSection.className = 'hero';
    heroSection.innerHTML = `
        <div class="hero-content">
            <h1>Bine ați venit la Cafeneaua lui Cătălin</h1>
            <p>Descoperă aroma perfectă pentru fiecare moment</p>
            <button class="btn" onclick="scrollToProducts()">Vezi produsele</button>
        </div>
    `;
    
    // Products Section
    const productsSection = document.createElement('section');
    productsSection.id = 'products';
    productsSection.className = 'section';
    
    let productsHTML = `
        <h2 class="section-title">Produsele noastre</h2>
        <div class="search-container">
            <input type="text" id="searchInput" placeholder="Caută produsul preferat..." onkeyup="searchProducts()">
            <i class="fas fa-search search-icon"></i>
            <div id="noResults" class="no-results">Niciun produs găsit</div>
        </div>
        <div class="products-grid" id="productsGrid">
    `;
    
    productsData.forEach(product => {
        productsHTML += `
            <div class="product-card" data-name="${product.dataName}">
                <div class="product-img ${product.imgClass}"></div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <span class="price">${product.price}</span>
                    <button class="order-btn" onclick="showOrderMessage('${product.name}')">Comandă</button>
                </div>
            </div>
        `;
    });
    
    productsHTML += `</div>`;
    productsSection.innerHTML = productsHTML;
    
    // About Section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    aboutSection.className = 'section';
    aboutSection.innerHTML = `
        <h2 class="section-title">Despre noi</h2>
        <div class="about-content">
            <div class="about-text">
                <h3>Povestea lui Cătălin</h3>
                <p>Din 2015 aducem bucurie prin cafea de calitate și atmosferă primitoare.</p>
                <p>Fiecare ceașcă este pregătită cu pasiune de Cătălin și echipa sa.</p>
            </div>
            <div class="about-image"></div>
        </div>
    `;
    
    // Contact Section
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    contactSection.className = 'section';
    contactSection.innerHTML = `
        <h2 class="section-title">Contact</h2>
        <div class="contact-container">
            <div class="contact-info">
                <h3>Vizitează-ne</h3>
                <p><i class="fas fa-map-marker-alt"></i> Strada Plantelor, Nr. 25</p>
                <p><i class="fas fa-phone-alt"></i> 0722 123 456</p>
                <p><i class="fas fa-envelope"></i> contact@cafeneaulucatalin.ro</p>
                <p><i class="fas fa-clock"></i> L-V: 08-22, Weekend: 10-00</p>
            </div>
            <div class="contact-form">
                <h3>Scrie-i lui Cătălin</h3>
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" id="name" placeholder="Numele tău" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <textarea id="message" placeholder="Mesajul tău..." required></textarea>
                    </div>
                    <button type="submit" class="btn">Trimite</button>
                </form>
                <div id="notification" class="notification"></div>
            </div>
        </div>
    `;
    
    main.appendChild(heroSection);
    main.appendChild(productsSection);
    main.appendChild(aboutSection);
    main.appendChild(contactSection);
}

// ===== FUNCȚII UTILITARE =====
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function showOrderMessage(productName) {
    const product = productsData.find(p => p.name === productName);
    if (product) addToCart(product);
    
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    notification.textContent = `Ai adăugat în coș: ${productName}. Total: ${cart.length} produse`;
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

function searchProducts() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase().trim();
    const productsGrid = document.getElementById('productsGrid');
    const products = productsGrid.getElementsByClassName('product-card');
    const noResults = document.getElementById('noResults');
    
    let hasVisibleProducts = false;
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productName = product.getAttribute('data-name').toLowerCase();
        const productTitle = product.querySelector('h3').textContent.toLowerCase();
        
        if (productName.includes(filter) || productTitle.includes(filter) || filter === '') {
            product.style.display = 'block';
            hasVisibleProducts = true;
        } else {
            product.style.display = 'none';
        }
    }
    
    noResults.style.display = (!hasVisibleProducts && filter !== '') ? 'block' : 'none';
}

// ===== INITIALIZARE =====
document.addEventListener('DOMContentLoaded', function() {
    generateContent();
    
    setTimeout(() => {
        loadFormData();
        document.getElementById('name')?.addEventListener('input', saveFormData);
        document.getElementById('email')?.addEventListener('input', saveFormData);
    }, 500);
    
    updateCartCount();
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                const notification = document.getElementById('notification');
                notification.style.display = 'block';
                notification.textContent = `Mulțumim, ${name}!`;
                contactForm.reset();
                
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000);
            }
        });
    }
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') searchProducts();
        });
    }
});