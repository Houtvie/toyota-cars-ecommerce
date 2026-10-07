/* ============================================
   TOYOTA CARS E-COMMERCE - MAIN JAVASCRIPT
   Shared behaviour: mobile menu, homepage featured
   cars, scroll-to-top, animations.
   (Cars page logic lives inline in cars.html,
   details page logic in car-details.js,
   contact form logic inline in contact.html.)
   ============================================ */

const PLACEHOLDER_IMAGE = 'images/placeholder-car.svg';

// ========== MOBILE MENU ==========
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    const closeMenu = () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.classList.remove('menu-open');
    };

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) closeMenu();
    });
});

// ========== FEATURED CARS (Homepage) ==========
function displayFeaturedCars() {
    const container = document.getElementById('featuredCarsGrid');
    if (!container || typeof carsData === 'undefined') return;

    const featured = carsData.filter(car => car.featured).slice(0, 3);

    container.innerHTML = featured.map(car => `
        <div class="car-card">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}'">
                <span class="featured-badge">Featured</span>
            </div>
            <div class="car-info">
                <h3 class="car-name">${car.name}</h3>
                <p class="car-category">${car.category}</p>
                <p class="car-price">₦${car.price.toLocaleString()}</p>
                <a href="cars-details.html?id=${car.id}" class="btn btn-small">View Details</a>
            </div>
        </div>
    `).join('');
}

// ========== SCROLL TO TOP BUTTON ==========
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    const btn = document.querySelector('.scroll-to-top');
    if (btn) btn.classList.toggle('visible', window.pageYOffset > 300);
});

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function () {
    displayFeaturedCars();

    if (!document.querySelector('.scroll-to-top')) {
        const btn = document.createElement('button');
        btn.className = 'scroll-to-top';
        btn.innerHTML = '↑';
        btn.setAttribute('aria-label', 'Scroll to top');
        btn.onclick = scrollToTop;
        document.body.appendChild(btn);
    }
});

// Smooth scrolling for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// AOS animations, only if the library is present
if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, offset: 100, once: true });
}
