// Coș de cumpărături
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.taxRate = 0.10; // 10% TVA
        this.init();
    }

    init() {
        this.updateCartDisplay();
        this.bindEvents();
    }

    bindEvents() {
        // Buton toggle coș
        document.getElementById('cartToggle').addEventListener('click', () => this.toggleCart());
        document.getElementById('closeCart').addEventListener('click', () => this.closeCart());
        document.getElementById('cartOverlay').addEventListener('click', () => this.closeCart());
        
        // Butoane acțiuni coș
        document.getElementById('checkoutBtn').addEventListener('click', () => this.checkout());
        document.getElementById('clearCartBtn').addEventListener('click', () => this.clearCart());
        
        // Butoane adăugare produse
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                this.addItem({
                    id: e.target.dataset.id,
                    name: e.target.dataset.name,
                    price: parseFloat(e.target.dataset.price),
                    image: e.target.dataset.image,
                    quantity: 1
                });
            }
        });

        // Butoane quantity în coș
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quantity-btn')) {
                const itemElement = e.target.closest('.cart-item');
                if (itemElement) {
                    const itemId = itemElement.dataset.id;
                    const isIncrease = e.target.classList.contains('increase');
                    this.updateQuantity(itemId, isIncrease);
                }
            }
            
            if (e.target.classList.contains('remove-item')) {
                const itemElement = e.target.closest('.cart-item');
                if (itemElement) {
                    const itemId = itemElement.dataset.id;
                    this.removeItem(itemId);
                }
            }
        });
    }

    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push(item);
        }
        
        this.saveToLocalStorage();
        this.updateCartDisplay();
        this.showAddNotification(item.name);
        
        // Animatie buton
        const addButton = document.querySelector(`[data-id="${item.id}"]`);
        if (addButton) {
            addButton.classList.add('added');
            setTimeout(() => addButton.classList.remove('added'), 1000);
        }
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveToLocalStorage();
        this.updateCartDisplay();
        this.showNotification('Produs eliminat din coș', 'info');
    }

    updateQuantity(itemId, isIncrease) {
        const item = this.items.find(i => i.id === itemId);
        if (item) {
            if (isIncrease) {
                item.quantity += 1;
            } else {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    this.removeItem(itemId);
                    return;
                }
            }
            this.saveToLocalStorage();
            this.updateCartDisplay();
        }
    }

    clearCart() {
        if (this.items.length === 0) return;
        
        if (confirm('Sigur dorești să golești coșul?')) {
            this.items = [];
            this.saveToLocalStorage();
            this.updateCartDisplay();
            this.showNotification('Coșul a fost golit', 'info');
        }
    }

    checkout() {
        if (this.items.length === 0) {
            this.showNotification('Coșul este gol!', 'error');
            return;
        }

        // Simulare procesare comandă
        const total = this.getTotal();
        const subtotal = this.getSubtotal();
        const tax = this.getTax();
        
        const orderSummary = this.items.map(item => 
            `${item.name} x${item.quantity} - ${(item.price * item.quantity).toFixed(2)} lei`
        ).join('\n');
        
        const message = `COMANDA PLASATĂ CU SUCCES!\n\n${orderSummary}\n\nSubtotal: ${subtotal.toFixed(2)} lei\nTVA (10%): ${tax.toFixed(2)} lei\nTotal: ${total.toFixed(2)} lei\n\nVă mulțumim pentru comandă!`;
        
        this.showNotification(message, 'success');
        
        // Resetare coș după comandă
        setTimeout(() => {
            this.items = [];
            this.saveToLocalStorage();
            this.updateCartDisplay();
            this.closeCart();
        }, 3000);
    }

    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTax() {
        return this.getSubtotal() * this.taxRate;
    }

    getTotal() {
        return this.getSubtotal() + this.getTax();
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartSubtotal = document.getElementById('cartSubtotal');
        const cartTax = document.getElementById('cartTax');
        const cartTotal = document.getElementById('cartTotal');
        const emptyCartMessage = document.getElementById('emptyCartMessage');
        const checkoutBtn = document.getElementById('checkoutBtn');

        // Actualizează numărul de produse
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Actualizează totalurile
        const subtotal = this.getSubtotal();
        const tax = this.getTax();
        const total = this.getTotal();
        
        cartSubtotal.textContent = subtotal.toFixed(2);
        cartTax.textContent = tax.toFixed(2);
        cartTotal.textContent = total.toFixed(2);

        // Actualizează lista de produse
        if (this.items.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartItems.innerHTML = '';
            cartItems.appendChild(emptyCartMessage);
            checkoutBtn.disabled = true;
        } else {
            emptyCartMessage.style.display = 'none';
            cartItems.innerHTML = this.items.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price} lei/buc</div>
                        <div class="cart-item-total">${(item.price * item.quantity).toFixed(2)} lei</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn decrease" title="Scade cantitatea">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn increase" title="Crește cantitatea">+</button>
                        <button class="remove-item" title="Șterge produs">×</button>
                    </div>
                </div>
            `).join('');
            checkoutBtn.disabled = false;
        }
    }

    toggleCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('active');
        
        // Blochează scroll pe body când coșul este deschis
        document.body.style.overflow = cartSidebar.classList.contains('open') ? 'hidden' : '';
    }

    closeCart() {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartOverlay = document.getElementById('cartOverlay');
        
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    showAddNotification(productName) {
        this.showNotification(`"${productName}" a fost adăugat în coș!`, 'success');
    }

    showNotification(message, type = 'info') {
        // Șterge notificările existente
        const existingNotifications = document.querySelectorAll('.cart-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `cart-notification ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️'
        };
        
        notification.innerHTML = `
            <span class="cart-notification-icon">${icons[type] || icons.info}</span>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    saveToLocalStorage() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    }
}

// Funcționalitate pentru schimbarea categoriilor meniu
document.addEventListener('DOMContentLoaded', function() {
    // Initializează coșul
    const cart = new ShoppingCart();
    
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuSections = document.querySelectorAll('.menu-items');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all menu sections
            menuSections.forEach(section => section.classList.add('hidden'));
            
            // Show selected category
            const category = this.getAttribute('data-category');
            const targetSection = document.getElementById(`${category}-items`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                
                // Adaugă animație de fade-in pentru secțiunea afișată
                targetSection.style.opacity = '0';
                targetSection.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    targetSection.style.transition = 'all 0.5s ease';
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                }, 50);
            }
        });
    });

    // Animatie pentru elementele meniului la hover
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animations for contact form
    function initContactAnimations() {
        const contactForm = document.getElementById('messageForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show loading state
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class="btn-icon">⏳</span> Se trimite...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    // Show success message
                    submitBtn.innerHTML = '<span class="btn-icon">✅</span> Mesaj Trimis!';
                    submitBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
                    
                    // Reset form
                    setTimeout(() => {
                        contactForm.reset();
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        
                        // Show confirmation message
                        showFormNotification('Mesajul tău a fost trimis cu succes! Te vom contacta în curând.');
                    }, 2000);
                }, 1500);
            });
        }
    }

    // Notification function for contact form
    function showFormNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'form-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">✅</span>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Initialize contact animations
    initContactAnimations();

    // Animatie smooth scroll pentru link-uri
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.site-header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(93, 64, 55, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'rgba(93, 64, 55, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Intersection Observer pentru animații la scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatableElements = document.querySelectorAll('.menu-item, .feature, .gallery-item, .contact-card');
    animatableElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    console.log('La Catalin - Cafenea Moldovenească loaded! Coș de cumpărături activ!');
});