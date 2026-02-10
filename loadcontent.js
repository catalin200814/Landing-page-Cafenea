// loadcontent.js - Generează tot HTML-ul folosind obiecte JavaScript

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

// DATELE PENTRU GALERIE
const galleryData = [
    {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Interior cafenea"
    },
    {
        url: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Barista la lucru"
    },
    {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Atmosfera cafenelei"
    },
    {
        url: "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        alt: "Prepararea cafelei"
    }
];

// VARIABILE GLOBALE
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// OBJETUL PRINCIPAL CARE GESTIONEAZĂ TOATĂ APLICAȚIA
const App = {
    // Metode pentru crearea elementelor HTML
    createElement: function(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);
        
        // Adaugă atribute
        Object.keys(attributes).forEach(key => {
            if (key === 'className') {
                element.className = attributes[key];
            } else if (key === 'textContent') {
                element.textContent = attributes[key];
            } else if (key === 'innerHTML') {
                element.innerHTML = attributes[key];
            } else {
                element.setAttribute(key, attributes[key]);
            }
        });
        
        // Adaugă copii
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
        
        return element;
    },

    // Metode pentru diferite secțiuni ale site-ului
    createFloatingElements: function() {
        const container = this.createElement('div', { className: 'floating-elements' });
        
        const floatingItems = ['☕', '🥐', '🍰', '🧁', '🍪'];
        floatingItems.forEach((item, index) => {
            const floatingElement = this.createElement('div', {
                className: 'floating-element'
            }, [item]);
            container.appendChild(floatingElement);
        });
        
        return container;
    },

    createCartIcon: function() {
        const cartIcon = this.createElement('div', {
            id: 'cartIcon',
            className: 'cart-icon'
        });
        
        const icon = this.createElement('i', { className: 'fas fa-shopping-cart' });
        const cartCount = this.createElement('div', { className: 'cart-count', textContent: '0' });
        
        cartIcon.appendChild(icon);
        cartIcon.appendChild(cartCount);
        
        return cartIcon;
    },

    createCartSidebar: function() {
        const sidebar = this.createElement('div', {
            id: 'cartSidebar',
            className: 'cart-sidebar'
        });
        
        // Header coș
        const cartHeader = this.createElement('div', { className: 'cart-header' });
        const cartTitle = this.createElement('h3', { textContent: 'Coșul tău' });
        const closeButton = this.createElement('button', {
            id: 'closeCart',
            className: 'close-cart'
        });
        const closeIcon = this.createElement('i', { className: 'fas fa-times' });
        closeButton.appendChild(closeIcon);
        cartHeader.appendChild(cartTitle);
        cartHeader.appendChild(closeButton);
        
        // Items coș
        const cartItems = this.createElement('div', { id: 'cartItems', className: 'cart-items' });
        const emptyCart = this.createElement('div', { className: 'empty-cart' });
        const coffeeIcon = this.createElement('i', { className: 'fas fa-coffee' });
        const emptyText1 = this.createElement('p', { textContent: 'Coșul tău este gol' });
        const emptyText2 = this.createElement('p', { textContent: 'Adaugă produse din meniu' });
        
        emptyCart.appendChild(coffeeIcon);
        emptyCart.appendChild(emptyText1);
        emptyCart.appendChild(emptyText2);
        cartItems.appendChild(emptyCart);
        
        // Summary coș
        const cartSummary = this.createElement('div', { className: 'cart-summary' });
        
        const createSummaryRow = (label, id) => {
            const row = this.createElement('div', { className: 'summary-row' });
            const labelSpan = this.createElement('span', { textContent: label });
            const valueSpan = this.createElement('span', { id: id, textContent: '0.00 lei' });
            row.appendChild(labelSpan);
            row.appendChild(valueSpan);
            return row;
        };
        
        cartSummary.appendChild(createSummaryRow('Subtotal:', 'subtotal'));
        cartSummary.appendChild(createSummaryRow('TVA (10%):', 'tax'));
        
        const totalRow = this.createElement('div', { className: 'summary-row cart-total' });
        const totalLabel = this.createElement('span', { textContent: 'Total:' });
        const totalValue = this.createElement('span', { id: 'total', textContent: '0.00 lei' });
        totalRow.appendChild(totalLabel);
        totalRow.appendChild(totalValue);
        cartSummary.appendChild(totalRow);
        
        const checkoutBtn = this.createElement('button', {
            id: 'checkoutBtn',
            className: 'checkout-btn',
            textContent: 'Finalizează Comanda',
            disabled: true
        });
        cartSummary.appendChild(checkoutBtn);
        
        // Asamblează sidebar
        sidebar.appendChild(cartHeader);
        sidebar.appendChild(cartItems);
        sidebar.appendChild(cartSummary);
        
        return sidebar;
    },

    createNotification: function() {
        const notification = this.createElement('div', {
            id: 'notification',
            className: 'notification'
        });
        
        const icon = this.createElement('i', { className: 'fas fa-check-circle' });
        const text = this.createElement('span', { textContent: 'Produs adăugat în coș!' });
        
        notification.appendChild(icon);
        notification.appendChild(text);
        
        return notification;
    },

    createHeroSection: function() {
        const section = this.createElement('section', {
            id: 'acasa',
            className: 'hero-section'
        });
        
        const overlay = this.createElement('div', { className: 'hero-overlay' });
        const content = this.createElement('div', { className: 'hero-content' });
        
        const title = this.createElement('h1', { textContent: 'La Catalin' });
        const subtitle = this.createElement('p', {
            className: 'hero-subtitle',
            textContent: 'Cafenea Moldovenească Autentică'
        });
        const description = this.createElement('p', {
            className: 'hero-description',
            textContent: 'Aroma cafelei proaspete, atmosfera călduroasă și tradiția moldovenească'
        });
        
        const buttons = this.createElement('div', { className: 'hero-buttons' });
        const menuBtn = this.createElement('a', {
            href: '#meniu',
            className: 'btn btn-primary',
            textContent: 'Vezi Meniul'
        });
        const reserveBtn = this.createElement('a', {
            href: '#contact',
            className: 'btn btn-secondary',
            textContent: 'Rezervă o masă'
        });
        
        buttons.appendChild(menuBtn);
        buttons.appendChild(reserveBtn);
        
        content.appendChild(title);
        content.appendChild(subtitle);
        content.appendChild(description);
        content.appendChild(buttons);
        overlay.appendChild(content);
        section.appendChild(overlay);
        
        return section;
    },

    createHeader: function() {
        const header = this.createElement('header', { className: 'site-header' });
        const mainHeader = this.createElement('div', { className: 'main-header' });
        
        const logo = this.createElement('div', { className: 'logo' });
        const logoTitle = this.createElement('h1', { textContent: 'LA CATALIN' });
        const tagline = this.createElement('p', {
            className: 'tagline',
            textContent: 'Cafenea Moldovenească'
        });
        logo.appendChild(logoTitle);
        logo.appendChild(tagline);
        
        const nav = this.createElement('nav', { className: 'main-navigation' });
        
        const navLinks = [
            { href: '#acasa', text: 'ACASĂ' },
            { href: '#meniu', text: 'MENIU' },
            { href: '#despre', text: 'DESPRE NOI' },
            { href: '#contact', text: 'CONTACT' }
        ];
        
        navLinks.forEach(link => {
            const navLink = this.createElement('a', {
                href: link.href,
                className: 'nav-link',
                textContent: link.text
            });
            nav.appendChild(navLink);
        });
        
        mainHeader.appendChild(logo);
        mainHeader.appendChild(nav);
        header.appendChild(mainHeader);
        
        return header;
    },

    createMenuSection: function() {
        const section = this.createElement('section', { id: 'meniu' });
        const container = this.createElement('div', { className: 'container' });
        
        const title = this.createElement('h2', {
            className: 'section-title',
            textContent: 'Meniu Cafele'
        });
        
        const categories = this.createElement('div', { className: 'menu-categories' });
        const categoryButtons = [
            { category: 'cafea', text: 'Cafele' },
            { category: 'ceai', text: 'Ceaiuri' },
            { category: 'racoritoare', text: 'Răcoritoare' },
            { category: 'gustari', text: 'Gustări' }
        ];
        
        categoryButtons.forEach((btn, index) => {
            const button = this.createElement('button', {
                className: `category-btn ${index === 0 ? 'active' : ''}`,
                'data-category': btn.category,
                textContent: btn.text
            });
            categories.appendChild(button);
        });
        
        // Container pentru fiecare categorie
        const menuContainers = this.createElement('div');
        
        Object.keys(menuData).forEach(category => {
            const container = this.createElement('div', {
                id: `${category}-items`,
                className: `menu-items ${category === 'cafea' ? '' : 'hidden'}`
            });
            menuContainers.appendChild(container);
        });
        
        container.appendChild(title);
        container.appendChild(categories);
        container.appendChild(menuContainers);
        section.appendChild(container);
        
        return section;
    },

    createMenuItem: function(item) {
        const menuItem = this.createElement('div', { className: 'menu-item' });
        
        const imageDiv = this.createElement('div', { className: 'item-image' });
        const image = this.createElement('img', {
            src: item.image,
            alt: item.name,
            loading: 'lazy'
        });
        imageDiv.appendChild(image);
        
        const infoDiv = this.createElement('div', { className: 'item-info' });
        const name = this.createElement('h3', { textContent: item.name });
        const description = this.createElement('p', { textContent: item.description });
        
        const footer = this.createElement('div', { className: 'item-footer' });
        const price = this.createElement('span', {
            className: 'price',
            textContent: `${item.price} lei`
        });
        
        const addButton = this.createElement('button', {
            className: 'add-to-cart',
            'data-id': item.id
        });
        const cartIcon = this.createElement('i', { className: 'fas fa-cart-plus' });
        addButton.appendChild(cartIcon);
        addButton.appendChild(document.createTextNode(' Adaugă'));
        
        footer.appendChild(price);
        footer.appendChild(addButton);
        
        infoDiv.appendChild(name);
        infoDiv.appendChild(description);
        infoDiv.appendChild(footer);
        
        menuItem.appendChild(imageDiv);
        menuItem.appendChild(infoDiv);
        
        return menuItem;
    },

    createGallerySection: function() {
        const section = this.createElement('section', { id: 'galerie' });
        const container = this.createElement('div', { className: 'container' });
        
        const title = this.createElement('h2', {
            className: 'section-title',
            textContent: 'Galerie Foto'
        });
        
        const grid = this.createElement('div', { className: 'gallery-grid' });
        
        galleryData.forEach((item, index) => {
            const galleryItem = this.createElement('div', {
                className: 'gallery-item',
                style: `animation-delay: ${index * 0.1}s`
            });
            
            const image = this.createElement('img', {
                src: item.url,
                alt: item.alt
            });
            
            galleryItem.appendChild(image);
            grid.appendChild(galleryItem);
        });
        
        container.appendChild(title);
        container.appendChild(grid);
        section.appendChild(container);
        
        return section;
    },

    createAboutSection: function() {
        const section = this.createElement('section', { id: 'despre' });
        const container = this.createElement('div', { className: 'container' });
        
        const title = this.createElement('h2', {
            className: 'section-title',
            textContent: 'Despre La Catalin'
        });
        
        const aboutText = this.createElement('div', { className: 'about-text' });
        const paragraph = this.createElement('p', {
            textContent: 'Bun venit la La Catalin, cafeneaua unde aroma cafelei se îmbină cu căldura ospitalității moldovenești. Aici fiecare ceașcă de cafea este o poveste, iar fiecare client este o parte din familia noastră.'
        });
        aboutText.appendChild(paragraph);
        
        const featuresGrid = this.createElement('div', { className: 'features-grid' });
        
        const features = [
            { icon: '☕', title: 'Cafea Proaspătă', text: 'Boabe de cafea selecționate și proaspăt prăjite zilnic pentru cel mai bun gust' },
            { icon: '🏠', title: 'Atmosferă Casnică', text: 'Un ambient cald și primitor, perfect pentru relaxare sau întâlniri de afaceri' },
            { icon: '📍', title: 'Locație Centrală', text: 'În inima orașului, ușor accesibilă din orice punct al Chișinăului' },
            { icon: '👨‍🍳', title: 'Baristi Experimentați', text: 'Echipa noastră de specialiști creează artă în fiecare ceașcă de cafea' }
        ];
        
        features.forEach((feature, index) => {
            const featureDiv = this.createElement('div', {
                className: 'feature',
                style: `animation-delay: ${index * 0.1}s`
            });
            
            const iconDiv = this.createElement('div', {
                className: 'feature-icon',
                textContent: feature.icon
            });
            const titleH3 = this.createElement('h3', { textContent: feature.title });
            const textP = this.createElement('p', { textContent: feature.text });
            
            featureDiv.appendChild(iconDiv);
            featureDiv.appendChild(titleH3);
            featureDiv.appendChild(textP);
            featuresGrid.appendChild(featureDiv);
        });
        
        container.appendChild(title);
        container.appendChild(aboutText);
        container.appendChild(featuresGrid);
        section.appendChild(container);
        
        return section;
    },

    createContactSection: function() {
        const section = this.createElement('section', { id: 'contact' });
        const container = this.createElement('div', { className: 'container' });
        
        const title = this.createElement('h2', {
            className: 'section-title',
            textContent: 'Contactează-ne'
        });
        
        const content = this.createElement('div', { className: 'contact-content' });
        
        // Contact Info
        const contactInfo = this.createElement('div', { className: 'contact-info' });
        
        const contactItems = [
            { icon: '📍', title: 'Adresă', text: 'Strada Mihai Eminescu nr. 15<br>Chișinău, Moldova' },
            { icon: '📞', title: 'Telefon', text: '+373 79 123 456<br>+373 22 123 456' },
            { icon: '🕒', title: 'Program', text: 'Luni - Vineri: 7:00 - 22:00<br>Sâmbătă - Duminică: 8:00 - 23:00' },
            { icon: '📧', title: 'Email', text: 'contact@lacatalin.md<br>rezervari@lacatalin.md' }
        ];
        
        contactItems.forEach((item, index) => {
            const contactItem = this.createElement('div', {
                className: 'contact-item',
                style: `animation-delay: ${index * 0.1}s`
            });
            
            const iconDiv = this.createElement('div', {
                className: 'contact-icon',
                textContent: item.icon
            });
            
            const infoDiv = this.createElement('div');
            const titleH3 = this.createElement('h3', { textContent: item.title });
            const textP = this.createElement('p', { innerHTML: item.text });
            
            infoDiv.appendChild(titleH3);
            infoDiv.appendChild(textP);
            
            contactItem.appendChild(iconDiv);
            contactItem.appendChild(infoDiv);
            contactInfo.appendChild(contactItem);
        });
        
        // Contact Form
        const contactForm = this.createElement('div', {
            className: 'contact-form',
            style: 'animation-delay: 0.5s'
        });
        
        const formTitle = this.createElement('h3', { textContent: 'Trimite-ne un mesaj' });
        const form = this.createElement('form', { id: 'messageForm' });
        
        const formGroups = [
            { type: 'text', name: 'name', placeholder: 'Numele tău', required: true },
            { type: 'email', name: 'email', placeholder: 'Email', required: true },
            { type: 'textarea', name: 'message', placeholder: 'Mesajul tău...', rows: 5, required: true }
        ];
        
        formGroups.forEach((group, index) => {
            const formGroup = this.createElement('div', {
                className: 'form-group',
                style: `animation-delay: ${0.6 + index * 0.1}s`
            });
            
            let input;
            if (group.type === 'textarea') {
                input = this.createElement('textarea', {
                    name: group.name,
                    placeholder: group.placeholder,
                    rows: group.rows,
                    required: group.required
                });
            } else {
                input = this.createElement('input', {
                    type: group.type,
                    name: group.name,
                    placeholder: group.placeholder,
                    required: group.required
                });
            }
            
            formGroup.appendChild(input);
            form.appendChild(formGroup);
        });
        
        const submitBtn = this.createElement('button', {
            type: 'submit',
            className: 'submit-btn',
            textContent: 'Trimite Mesaj',
            style: 'animation-delay: 0.9s'
        });
        form.appendChild(submitBtn);
        
        contactForm.appendChild(formTitle);
        contactForm.appendChild(form);
        
        content.appendChild(contactInfo);
        content.appendChild(contactForm);
        
        container.appendChild(title);
        container.appendChild(content);
        section.appendChild(container);
        
        return section;
    },

    createFooter: function() {
        const footer = this.createElement('footer');
        const footerContent = this.createElement('div', { className: 'footer-content' });
        
        // Section 1
        const section1 = this.createElement('div', { className: 'footer-section' });
        const title1 = this.createElement('h3', { textContent: 'La Catalin' });
        const text1a = this.createElement('p', { textContent: 'Cafenea Moldovenească Autentică' });
        const text1b = this.createElement('p', { textContent: 'Aroma cafelei proaspete, atmosfera călduroasă și tradiția moldovenească' });
        
        section1.appendChild(title1);
        section1.appendChild(text1a);
        section1.appendChild(text1b);
        
        // Section 2
        const section2 = this.createElement('div', { className: 'footer-section' });
        const title2 = this.createElement('h3', { textContent: 'Program' });
        const text2a = this.createElement('p', { textContent: 'Luni - Vineri: 7:00 - 22:00' });
        const text2b = this.createElement('p', { textContent: 'Sâmbătă - Duminică: 8:00 - 23:00' });
        
        section2.appendChild(title2);
        section2.appendChild(text2a);
        section2.appendChild(text2b);
        
        // Section 3
        const section3 = this.createElement('div', { className: 'footer-section' });
        const title3 = this.createElement('h3', { textContent: 'Social Media' });
        const socialLinks = this.createElement('div', { className: 'social-links' });
        
        const socialIcons = [
            { icon: 'fab fa-facebook', href: '#' },
            { icon: 'fab fa-instagram', href: '#' },
            { icon: 'fab fa-tiktok', href: '#' },
            { icon: 'fab fa-twitter', href: '#' }
        ];
        
        socialIcons.forEach(social => {
            const link = this.createElement('a', {
                href: social.href,
                className: 'social-link'
            });
            const icon = this.createElement('i', { className: social.icon });
            link.appendChild(icon);
            socialLinks.appendChild(link);
        });
        
        section3.appendChild(title3);
        section3.appendChild(socialLinks);
        
        footerContent.appendChild(section1);
        footerContent.appendChild(section2);
        footerContent.appendChild(section3);
        
        const copyright = this.createElement('div', { className: 'copyright' });
        const copyrightText = this.createElement('p', {
            textContent: '© 2023 La Catalin. Toate drepturile rezervate.'
        });
        copyright.appendChild(copyrightText);
        
        footer.appendChild(footerContent);
        footer.appendChild(copyright);
        
        return footer;
    },

    // Metode pentru popularea datelor
    populateMenuItems: function() {
        Object.keys(menuData).forEach(category => {
            const container = document.getElementById(`${category}-items`);
            if (container) {
                menuData[category].forEach(item => {
                    const menuItem = this.createMenuItem(item);
                    container.appendChild(menuItem);
                });
            }
        });
    },

    // Metode pentru logica aplicației
    setupEventListeners: function() {
        // Butoane categorii meniu
        const categoryBtns = document.querySelectorAll('.category-btn');
        const menuSections = document.querySelectorAll('.menu-items');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                App.switchCategory(this, categoryBtns, menuSections);
            });
        });

        // Adăugare în coș
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('add-to-cart') || e.target.closest('.add-to-cart')) {
                const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.closest('.add-to-cart');
                const itemId = parseInt(button.getAttribute('data-id'));
                App.addToCart(itemId);
            }
            
            // Butoane cantitate coș
            if (e.target.classList.contains('quantity-btn') || e.target.closest('.quantity-btn')) {
                const button = e.target.classList.contains('quantity-btn') ? e.target : e.target.closest('.quantity-btn');
                const itemId = parseInt(button.closest('.cart-item').getAttribute('data-id'));
                
                if (button.querySelector('.fa-plus') || button.textContent === '+') {
                    App.updateQuantity(itemId, 1);
                } else {
                    App.updateQuantity(itemId, -1);
                }
            }
            
            // Ștergere din coș
            if (e.target.classList.contains('remove-item') || e.target.closest('.remove-item')) {
                const button = e.target.classList.contains('remove-item') ? e.target : e.target.closest('.remove-item');
                const itemId = parseInt(button.closest('.cart-item').getAttribute('data-id'));
                App.removeFromCart(itemId);
            }
        });
        
        // Deschidere/închidere coș
        document.getElementById('cartIcon').addEventListener('click', App.openCart);
        document.getElementById('closeCart').addEventListener('click', App.closeCart);
        
        // Finalizare comandă
        document.getElementById('checkoutBtn').addEventListener('click', App.checkout);
        
        // Formular de contact
        const contactForm = document.getElementById('messageForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                App.handleContactForm(this);
            });
        }

        // Închidere coș la click în afara
        document.addEventListener('click', function(e) {
            const cartSidebar = document.getElementById('cartSidebar');
            const cartIcon = document.getElementById('cartIcon');
            
            if (cartSidebar.classList.contains('open') && 
                !cartSidebar.contains(e.target) && 
                !cartIcon.contains(e.target)) {
                App.closeCart();
            }
        });

        // Navigare smooth
        App.setupSmoothScrolling();
    },

    switchCategory: function(clickedBtn, allBtns, allSections) {
        allBtns.forEach(b => b.classList.remove('active'));
        clickedBtn.classList.add('active');
        
        allSections.forEach(section => section.classList.add('hidden'));
        
        const category = clickedBtn.getAttribute('data-category');
        const targetSection = document.getElementById(`${category}-items`);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            this.animateMenuItems(targetSection);
        }
    },

    animateMenuItems: function(container) {
        const items = container.querySelectorAll('.menu-item');
        items.forEach((item, index) => {
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
            }, 50);
        });
    },

    createCartItem: function(item) {
        const cartItem = this.createElement('div', {
            className: 'cart-item',
            'data-id': item.id
        });
        
        const infoDiv = this.createElement('div', { className: 'cart-item-info' });
        const name = this.createElement('h4', { textContent: item.name });
        const price = this.createElement('p', { textContent: `${item.price} lei` });
        
        infoDiv.appendChild(name);
        infoDiv.appendChild(price);
        
        const controlsDiv = this.createElement('div', { className: 'cart-item-controls' });
        
        const minusBtn = this.createElement('button', { className: 'quantity-btn' });
        const minusIcon = this.createElement('i', { className: 'fas fa-minus' });
        minusBtn.appendChild(minusIcon);
        
        const quantity = this.createElement('span', { textContent: item.quantity });
        
        const plusBtn = this.createElement('button', { className: 'quantity-btn' });
        const plusIcon = this.createElement('i', { className: 'fas fa-plus' });
        plusBtn.appendChild(plusIcon);
        
        const removeBtn = this.createElement('button', { className: 'remove-item' });
        const removeIcon = this.createElement('i', { className: 'fas fa-trash' });
        removeBtn.appendChild(removeIcon);
        
        controlsDiv.appendChild(minusBtn);
        controlsDiv.appendChild(quantity);
        controlsDiv.appendChild(plusBtn);
        controlsDiv.appendChild(removeBtn);
        
        cartItem.appendChild(infoDiv);
        cartItem.appendChild(controlsDiv);
        
        return cartItem;
    },

    addToCart: function(itemId) {
        let product = null;
        for (const category in menuData) {
            product = menuData[category].find(item => item.id === itemId);
            if (product) break;
        }
        
        if (!product) return;
        
        const existingItem = cart.find(item => item.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        
        this.updateCartDisplay();
        this.showNotification(`${product.name} a fost adăugat în coș!`);
        this.animateCartIcon();
        this.saveCartToStorage();
    },

    updateQuantity: function(itemId, change) {
        const item = cart.find(item => item.id === itemId);
        if (!item) return;
        
        item.quantity += change;
        
        if (item.quantity <= 0) {
            this.removeFromCart(itemId);
        } else {
            this.updateCartDisplay();
            this.saveCartToStorage();
        }
    },

    removeFromCart: function(itemId) {
        const itemIndex = cart.findIndex(item => item.id === itemId);
        if (itemIndex > -1) {
            cart.splice(itemIndex, 1);
            this.updateCartDisplay();
            this.showNotification('Produsul a fost eliminat din coș!');
            this.saveCartToStorage();
        }
    },

    updateCartDisplay: function() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartCountElement = document.querySelector('.cart-count');
        const subtotalElement = document.getElementById('subtotal');
        const taxElement = document.getElementById('tax');
        const totalElement = document.getElementById('total');
        const checkoutBtn = document.getElementById('checkoutBtn');
        
        cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = cartCount;
        
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
                const cartItem = this.createCartItem(item);
                cartItemsContainer.appendChild(cartItem);
            });
            
            checkoutBtn.disabled = false;
        }
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.1;
        const total = subtotal + tax;
        
        cartTotal = total;
        
        subtotalElement.textContent = `${subtotal.toFixed(2)} lei`;
        taxElement.textContent = `${tax.toFixed(2)} lei`;
        totalElement.textContent = `${total.toFixed(2)} lei`;
    },

    openCart: function() {
        document.getElementById('cartSidebar').classList.add('open');
    },

    closeCart: function() {
        document.getElementById('cartSidebar').classList.remove('open');
    },

    checkout: function() {
        if (cart.length === 0) return;
        
        App.showNotification(`Comanda a fost plasată! Total: ${cartTotal.toFixed(2)} lei`, true);
        
        App.simulatePaymentProcessing();
    },

    simulatePaymentProcessing: function() {
        const checkoutBtn = document.getElementById('checkoutBtn');
        const originalText = checkoutBtn.textContent;
        
        checkoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Se procesează...';
        checkoutBtn.disabled = true;
        
        setTimeout(() => {
            cart = [];
            App.updateCartDisplay();
            App.closeCart();
            App.saveCartToStorage();
            
            checkoutBtn.innerHTML = originalText;
            checkoutBtn.disabled = false;
        }, 2000);
    },

    animateCartIcon: function() {
        const cartIcon = document.getElementById('cartIcon');
        cartIcon.style.transform = 'scale(1.2)';
        
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 300);
    },

    showNotification: function(message, isError = false) {
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
    },

    handleContactForm: function(form) {
        const formData = new FormData(form);
        const name = formData.get('name') || 'Nume';
        
        this.showNotification(`Mulțumim pentru mesaj, ${name}! Te vom contacta în curând.`);
        form.reset();
    },

    saveCartToStorage: function() {
        localStorage.setItem('laCatalinCart', JSON.stringify(cart));
    },

    loadCartFromStorage: function() {
        const savedCart = localStorage.getItem('laCatalinCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            this.updateCartDisplay();
        }
    },

    setupSmoothScrolling: function() {
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
    },

    initializeScrollAnimations: function() {
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

        const animatedElements = document.querySelectorAll('.menu-item, .feature, .contact-item, .gallery-item');
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    },

    // Metoda principală care inițializează tot site-ul
    init: function() {
        // Generează toate elementele HTML
        const elements = [
            this.createFloatingElements(),
            this.createCartIcon(),
            this.createCartSidebar(),
            this.createNotification(),
            this.createHeroSection(),
            this.createHeader(),
            this.createMenuSection(),
            this.createGallerySection(),
            this.createAboutSection(),
            this.createContactSection(),
            this.createFooter()
        ];
        
        // Adaugă toate elementele în body
        elements.forEach(element => {
            document.body.appendChild(element);
        });
        
        // Populează meniul cu produse
        this.populateMenuItems();
        
        // Inițializează event listeners
        this.setupEventListeners();
        this.updateCartDisplay();
        this.initializeScrollAnimations();
        this.loadCartFromStorage();
        
        console.log('La Catalin - Site generat complet din obiecte JavaScript!');
    }
};

// Inițializează aplicația când DOM-ul este încărcat
document.addEventListener('DOMContentLoaded', function() {
    App.init();
});