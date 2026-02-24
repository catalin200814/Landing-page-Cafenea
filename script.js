// Datele pentru meniu
const menuData = {
    cafea: [
        { id: 1, nume: "Espresso", desc: "Cafea puternică", pret: 12, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300" },
        { id: 2, nume: "Cappuccino", desc: "Cu spumă de lapte", pret: 15, img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300" },
        { id: 3, nume: "Latte", desc: "Cafea cu lapte", pret: 16, img: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300" },
        { id: 4, nume: "Americano", desc: "Espresso cu apă", pret: 10, img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300" }
    ],
    ceai: [
        { id: 5, nume: "Ceai Negru", desc: "Aromă intensă", pret: 8, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
        { id: 6, nume: "Ceai Verde", desc: "Proaspăt", pret: 9, img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300" },
        { id: 7, nume: "Ceai Fructe", desc: "Arome naturale", pret: 10, img: "https://images.unsplash.com/photo-1597481499750-3e11b15f1d16?w=300" }
    ],
    racoritoare: [
        { id: 8, nume: "Limonadă", desc: "Lămâie și mentă", pret: 12, img: "https://images.unsplash.com/photo-1523371683702-309cffa2f6c3?w=300" },
        { id: 9, nume: "Suc Natural", desc: "Fructe proaspete", pret: 10, img: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300" },
        { id: 10, nume: "Apă Minerală", desc: "Cu/fără gaz", pret: 5, img: "https://images.unsplash.com/photo-1548839149-851a64d0da60?w=300" }
    ],
    gustari: [
        { id: 11, nume: "Croissant", desc: "Proaspăt", pret: 8, img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300" },
        { id: 12, nume: "Tort", desc: "Ciocolată", pret: 15, img: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300" },
        { id: 13, nume: "Muffin", desc: "Cu afine", pret: 10, img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300" }
    ]
};

let cart = [];
let currentCategory = 'cafea';

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupEventListeners();
    loadCart();
});

function renderMenu() {
    const container = document.getElementById('menu-items');
    let html = '';
    menuData[currentCategory].forEach(item => {
        html += `
            <div class="menu-item">
                <img src="${item.img}" alt="${item.nume}">
                <div class="menu-item-info">
                    <h3>${item.nume}</h3>
                    <p>${item.desc}</p>
                    <div class="menu-item-footer">
                        <span class="price">${item.pret} lei</span>
                        <button class="add-to-cart" data-id="${item.id}">Adaugă</button>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function setupEventListeners() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderMenu();
        });
    });

    document.addEventListener('click', e => {
        if (e.target.classList.contains('add-to-cart')) {
            addToCart(parseInt(e.target.dataset.id));
        }
        if (e.target.classList.contains('qty-btn')) {
            updateQuantity(parseInt(e.target.dataset.id), parseInt(e.target.dataset.change));
        }
        if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
            const btn = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
            removeFromCart(parseInt(btn.dataset.id));
        }
    });

    document.getElementById('cartIcon').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('open');
    });

    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('open');
    });

    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    document.getElementById('sendMessage').addEventListener('click', sendMessage);

    document.addEventListener('click', e => {
        const cart = document.getElementById('cartSidebar');
        const icon = document.getElementById('cartIcon');
        if (cart.classList.contains('open') && !cart.contains(e.target) && !icon.contains(e.target)) {
            cart.classList.remove('open');
        }
    });
}

function addToCart(id) {
    let product = null;
    for (let cat in menuData) {
        const found = menuData[cat].find(p => p.id === id);
        if (found) { product = found; break; }
    }
    if (!product) return;

    const existing = cart.find(item => item.id === id);
    if (existing) existing.quantity++;
    else cart.push({ ...product, quantity: 1 });

    updateCart();
    showNotification(`${product.nume} adăugat!`);
    saveCart();
}

function updateQuantity(id, change) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
    updateCart();
    saveCart();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
    showNotification('Produs eliminat', true);
    saveCart();
}

function updateCart() {
    const itemsDiv = document.getElementById('cartItems');
    const countSpan = document.querySelector('.cart-count');
    const totalSpan = document.getElementById('cartTotal');
    const btn = document.getElementById('checkoutBtn');

    const count = cart.reduce((s, i) => s + i.quantity, 0);
    countSpan.textContent = count;

    if (cart.length === 0) {
        itemsDiv.innerHTML = '<div class="empty-cart"><i class="fas fa-coffee"></i><p>Coș gol</p></div>';
        btn.disabled = true;
    } else {
        let html = '';
        cart.forEach(item => {
            html += `
                <div class="cart-item">
                    <div><h4>${item.nume}</h4><p>${item.pret} lei</p></div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" data-id="${item.id}" data-change="-1">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" data-id="${item.id}" data-change="1">+</button>
                        <button class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        });
        itemsDiv.innerHTML = html;
        btn.disabled = false;
    }

    const total = cart.reduce((s, i) => s + (i.pret * i.quantity), 0);
    totalSpan.textContent = total + ' lei';
}

function checkout() {
    if (cart.length === 0) return;
    const total = cart.reduce((s, i) => s + (i.pret * i.quantity), 0);
    showNotification(`Comandă plasată! Total: ${total} lei`, true);
    cart = [];
    updateCart();
    saveCart();
    setTimeout(() => document.getElementById('cartSidebar').classList.remove('open'), 1000);
}

function sendMessage() {
    const name = document.getElementById('name').value;
    if (!name) showNotification('Completează numele', true);
    else showNotification(`Mulțumim, ${name}!`);
}

function showNotification(msg, isError = false) {
    const n = document.getElementById('notification');
    n.querySelector('span').textContent = msg;
    n.className = 'notification' + (isError ? ' error' : '');
    n.classList.add('show');
    setTimeout(() => n.classList.remove('show'), 2500);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCart();
    }
}