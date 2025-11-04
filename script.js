
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