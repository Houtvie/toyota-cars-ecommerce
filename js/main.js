/* ============================================
   TOYOTA CARS E-COMMERCE - MAIN JAVASCRIPT
   Handles navigation, featured cars, mobile menu,
   search functionality, and page interactions
   ============================================ */

// ========== GLOBAL VARIABLES ==========
let currentPage = 1;
const carsPerPage = 6;
let filteredCars = [...carsData]; // Copy of cars data for filtering

// ========== MOBILE MENU FUNCTIONALITY ==========
// Handles opening and closing of mobile navigation menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // Toggle mobile menu when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});

// ========== FEATURED CARS DISPLAY (Homepage) ==========
// Displays the first 3 cars on the homepage
function displayFeaturedCars() {
    const featuredContainer = document.querySelector('.featured-cars');
    
    if (!featuredContainer) return; // Exit if not on homepage

    // Get first 3 cars from database
    const featuredCars = carsData.slice(0, 3);
    
    // Generate HTML for each featured car
    featuredContainer.innerHTML = featuredCars.map(car => `
        <div class="car-card" data-aos="fade-up">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
                <span class="car-badge">${car.condition}</span>
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <p class="car-price">${car.price}</p>
                <div class="car-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.mileage}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                </div>
                <a href="cars-details.html?id=${car.id}" class="btn-primary">View Details</a>
            </div>
        </div>
    `).join('');
}

// ========== ALL CARS DISPLAY (Cars Page) ==========
// Displays all cars with pagination on the cars.html page
function displayAllCars() {
    const carsContainer = document.querySelector('.cars-grid');
    
    if (!carsContainer) return; // Exit if not on cars page

    // Calculate pagination
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const carsToDisplay = filteredCars.slice(startIndex, endIndex);

    // Generate HTML for each car
    carsContainer.innerHTML = carsToDisplay.map(car => `
        <div class="car-card" data-aos="fade-up">
            <div class="car-image">
                <img src="${car.image}" alt="${car.name}">
                <span class="car-badge">${car.condition}</span>
            </div>
            <div class="car-info">
                <h3>${car.name}</h3>
                <p class="car-price">${car.price}</p>
                <div class="car-specs">
                    <span><i class="fas fa-calendar"></i> ${car.year}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.mileage}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                </div>
                <a href="cars-details.html?id=${car.id}" class="btn-primary">View Details</a>
            </div>
        </div>
    `).join('');

    // Update pagination
    updatePagination();
}

// ========== PAGINATION FUNCTIONALITY ==========
// Creates and updates pagination buttons
function updatePagination() {
    const paginationContainer = document.querySelector('.pagination');
    
    if (!paginationContainer) return;

    const totalPages = Math.ceil(filteredCars.length / carsPerPage);

    // Generate pagination buttons
    let paginationHTML = '';

    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">Previous</button>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">Next</button>`;
    }

    paginationContainer.innerHTML = paginationHTML;
}

// ========== CHANGE PAGE FUNCTION ==========
// Changes the current page and scrolls to top
function changePage(page) {
    currentPage = page;
    displayAllCars();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== SEARCH FUNCTIONALITY ==========
// Searches cars by name, model, or features
function searchCars() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();

    // Filter cars based on search term
    if (searchTerm === '') {
        filteredCars = [...carsData]; // Show all cars if search is empty
    } else {
        filteredCars = carsData.filter(car => {
            return car.name.toLowerCase().includes(searchTerm) ||
                   car.description.toLowerCase().includes(searchTerm) ||
                   car.features.some(feature => feature.toLowerCase().includes(searchTerm));
        });
    }

    // Reset to first page and display results
    currentPage = 1;
    displayAllCars();

    // Show message if no results found
    const carsContainer = document.querySelector('.cars-grid');
    if (filteredCars.length === 0 && carsContainer) {
        carsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <h3>No cars found matching "${searchTerm}"</h3>
                <p>Try searching with different keywords</p>
            </div>
        `;
    }
}

// ========== FILTER FUNCTIONALITY ==========
// Filters cars by price range, year, condition, etc.
function filterCars() {
    const priceFilter = document.getElementById('priceFilter');
    const yearFilter = document.getElementById('yearFilter');
    const conditionFilter = document.getElementById('conditionFilter');

    // Start with all cars
    filteredCars = [...carsData];

    // Apply price filter
    if (priceFilter && priceFilter.value !== 'all') {
        const priceRange = priceFilter.value;
        filteredCars = filteredCars.filter(car => {
            const price = parseInt(car.price.replace(/[₦,]/g, ''));
            
            switch(priceRange) {
                case 'under-50m':
                    return price < 50000000;
                case '50m-80m':
                    return price >= 50000000 && price <= 80000000;
                case 'over-80m':
                    return price > 80000000;
                default:
                    return true;
            }
        });
    }

    // Apply year filter
    if (yearFilter && yearFilter.value !== 'all') {
        const year = parseInt(yearFilter.value);
        filteredCars = filteredCars.filter(car => car.year === year);
    }

    // Apply condition filter
    if (conditionFilter && conditionFilter.value !== 'all') {
        const condition = conditionFilter.value;
        filteredCars = filteredCars.filter(car => car.condition === condition);
    }

    // Reset to first page and display filtered results
    currentPage = 1;
    displayAllCars();
}

// ========== CAR DETAILS DISPLAY ==========
// Displays detailed information for a specific car
function displayCarDetails() {
    // Get car ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const carId = parseInt(urlParams.get('id'));

    // Find the car in the database
    const car = carsData.find(c => c.id === carId);

    if (!car) {
        // Redirect to cars page if car not found
        window.location.href = 'cars.html';
        return;
    }

    // Update page title
    document.title = `${car.name} - Toyota Cars Nigeria`;

    // Update car details in the page
    document.querySelector('.details-image img').src = car.image;
    document.querySelector('.details-image img').alt = car.name;
    document.querySelector('.car-title').textContent = car.name;
    document.querySelector('.car-price').textContent = car.price;
    document.querySelector('.car-description').textContent = car.description;

    // Update specifications
    const specsContainer = document.querySelector('.specs-grid');
    specsContainer.innerHTML = `
        <div class="spec-item">
            <i class="fas fa-calendar"></i>
            <div>
                <strong>Year</strong>
                <p>${car.year}</p>
            </div>
        </div>
        <div class="spec-item">
            <i class="fas fa-tachometer-alt"></i>
            <div>
                <strong>Mileage</strong>
                <p>${car.mileage}</p>
            </div>
        </div>
        <div class="spec-item">
            <i class="fas fa-cog"></i>
            <div>
                <strong>Transmission</strong>
                <p>${car.transmission}</p>
            </div>
        </div>
        <div class="spec-item">
            <i class="fas fa-gas-pump"></i>
            <div>
                <strong>Fuel Type</strong>
                <p>${car.fuelType}</p>
            </div>
        </div>
        <div class="spec-item">
            <i class="fas fa-palette"></i>
            <div>
                <strong>Color</strong>
                <p>${car.color}</p>
            </div>
        </div>
        <div class="spec-item">
            <i class="fas fa-car"></i>
            <div>
                <strong>Condition</strong>
                <p>${car.condition}</p>
            </div>
        </div>
    `;

    // Update features list
    const featuresContainer = document.querySelector('.features-list');
    featuresContainer.innerHTML = car.features.map(feature => 
        `<li><i class="fas fa-check"></i> ${feature}</li>`
    ).join('');

    // Update additional info
    document.querySelector('.additional-info').innerHTML = `
        <div class="info-item">
            <h4>Engine</h4>
            <p>${car.engine}</p>
        </div>
        <div class="info-item">
            <h4>Seating Capacity</h4>
            <p>${car.seating}</p>
        </div>
        <div class="info-item">
            <h4>Drive Type</h4>
            <p>${car.driveType}</p>
        </div>
    `;
}

// ========== CONTACT FORM HANDLING ==========
// Handles contact form submission
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }

        // Simulate form submission (in real app, this would send to server)
        alert(`Thank you ${name}! Your message has been received. We'll contact you soon at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// ========== INQUIRY FORM HANDLING (Car Details Page) ==========
// Handles inquiry form on car details page
function handleInquiryForm() {
    const inquiryForm = document.getElementById('inquiryForm');
    
    if (!inquiryForm) return;

    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('inquiryName').value;
        const email = document.getElementById('inquiryEmail').value;
        const phone = document.getElementById('inquiryPhone').value;

        // Get car name from page
        const carName = document.querySelector('.car-title').textContent;

        // Simulate inquiry submission
        alert(`Thank you ${name}! Your inquiry about the ${carName} has been received. We'll contact you at ${email} or ${phone}.`);
        
        // Reset form
        inquiryForm.reset();
    });
}

// ========== SMOOTH SCROLLING FOR NAVIGATION ==========
// Adds smooth scrolling behavior to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ========== SCROLL TO TOP BUTTON ==========
// Shows/hides scroll to top button and handles click
window.addEventListener('scroll', function() {
    const scrollBtn = document.querySelector('.scroll-to-top');
    
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========== INITIALIZE PAGE BASED ON CURRENT PAGE ==========
// Runs appropriate functions based on which page is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Homepage
    if (document.querySelector('.featured-cars')) {
        displayFeaturedCars();
    }

    // Cars page
    if (document.querySelector('.cars-grid')) {
        displayAllCars();
    }

    // Car details page
    if (document.querySelector('.car-details-container')) {
        displayCarDetails();
        handleInquiryForm();
    }

    // Contact page
    if (document.getElementById('contactForm')) {
        handleContactForm();
    }

    // Add scroll to top button to all pages
    if (!document.querySelector('.scroll-to-top')) {
        const scrollBtn = document.createElement('button');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.onclick = scrollToTop;
        document.body.appendChild(scrollBtn);
    }
});

// ========== ANIMATION ON SCROLL (AOS) INITIALIZATION ==========
// Initialize animations when page loads
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });
}