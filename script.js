// Fonctions pour générer dynamiquement les cartes de restaurants
function generateRestaurantCards() {
    const grid = document.querySelector('.restaurant-grid');
    restaurants.forEach(restaurant => {
        const card = createRestaurantCard(restaurant);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', generateRestaurantCards);

// Back to top functionality
window.addEventListener('scroll', () => {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});