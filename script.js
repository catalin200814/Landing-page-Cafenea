
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const menuSections = document.querySelectorAll('.menu-items');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            
            categoryBtns.forEach(b => b.classList.remove('active'));
           
            this.classList.add('active');
            
            
            menuSections.forEach(section => section.classList.add('hidden'));
            
            
            const category = this.getAttribute('data-category');
            const targetSection = document.getElementById(`${category}-items`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('messageForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            
            alert(`Mulțumim, ${name}! Mesajul tău a fost trimis. Te vom contacta în curând.`);
            this.reset();
        });
    }
});