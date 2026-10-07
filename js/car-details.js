/* ============================================
   CAR DETAILS PAGE
   Reads ?id=<number> from the URL, finds the car
   in carsData and fills the cars-details.html
   elements. Also renders similar vehicles.
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    const PLACEHOLDER = 'images/placeholder-car.svg';

    const loadingState = document.getElementById('loadingState');
    const errorState = document.getElementById('errorState');
    const content = document.getElementById('carDetailsContent');

    const carId = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
    const car = (typeof carsData !== 'undefined') ? carsData.find(c => c.id === carId) : null;

    loadingState.style.display = 'none';

    if (!car) {
        errorState.style.display = 'block';
        return;
    }

    // Page title and breadcrumb
    document.title = `${car.name} - Toyota Cars Nigeria`;
    document.getElementById('breadcrumbCarName').textContent = car.name;

    // Image
    const img = document.getElementById('mainCarImage');
    img.onerror = function () { this.onerror = null; this.src = PLACEHOLDER; };
    img.src = car.image;
    img.alt = car.name;

    // Text fields
    document.getElementById('carDetailName').textContent = car.name;
    document.getElementById('carDetailCategory').textContent = car.category;
    document.getElementById('carDetailPrice').textContent = '₦' + car.price.toLocaleString();
    document.getElementById('carDetailDescription').textContent = car.description;

    // Features
    document.getElementById('carFeaturesList').innerHTML =
        car.features.map(f => `<li>${f}</li>`).join('');

    // Specifications
    document.getElementById('carSpecsTable').innerHTML =
        Object.entries(car.specifications).map(([label, value]) => `
            <div class="spec-row">
                <span class="spec-label">${label}</span>
                <span class="spec-value">${value}</span>
            </div>
        `).join('');

    content.style.display = '';

    // Similar vehicles (same category, then fill from the rest)
    let similar = typeof getSimilarCars === 'function'
        ? getSimilarCars(car.id, car.category, 3)
        : [];
    if (similar.length < 3) {
        const extra = carsData.filter(c => c.id !== car.id && !similar.includes(c));
        similar = similar.concat(extra.slice(0, 3 - similar.length));
    }

    if (similar.length) {
        document.getElementById('similarCarsGrid').innerHTML = similar.map(c => `
            <div class="car-card">
                <div class="car-image">
                    <img src="${c.image}" alt="${c.name}" onerror="this.onerror=null;this.src='${PLACEHOLDER}'">
                </div>
                <div class="car-info">
                    <h3 class="car-name">${c.name}</h3>
                    <p class="car-category">${c.category}</p>
                    <p class="car-price">₦${c.price.toLocaleString()}</p>
                    <a href="cars-details.html?id=${c.id}" class="btn btn-small">View Details</a>
                </div>
            </div>
        `).join('');
        document.getElementById('similarCarsSection').style.display = 'block';
    }
});
