// Funcționalitate pentru schimbarea categoriilor meniu
document.addEventListener('DOMContentLoaded', function() {
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
            }
        });
    });

    // Formular de contact
    const contactForm = document.getElementById('messageForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mulțumim pentru mesaj! Te vom contacta în curând.');
            this.reset();
        });
    }

    console.log('La Catalin - Cafenea Moldovenească loaded!');
});