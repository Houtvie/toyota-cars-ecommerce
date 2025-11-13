/* ============================================
   TOYOTA CARS DATABASE
   Contains all Toyota vehicle information
   Prices are in Nigerian Naira (₦)
   ============================================ */

// Main cars data array - This contains all Toyota vehicles with their details
const carsData = [
    {
        id: 1,
        name: "Toyota Camry 2024",
        category: "Sedan",
        price: 35000000, // ₦35,000,000
        image: "images/cars/camry.jpg",
        featured: true,
        description: "The Toyota Camry represents the perfect blend of luxury, performance, and reliability. This elegant sedan features a spacious interior, advanced safety features, and exceptional fuel efficiency. Ideal for executives and families who value comfort and style.",
        features: [
            "2.5L 4-Cylinder Engine",
            "Automatic Transmission",
            "Leather Interior",
            "Touchscreen Infotainment System",
            "Rearview Camera",
            "Bluetooth Connectivity",
            "Cruise Control",
            "Dual Climate Control",
            "Power Windows & Mirrors",
            "Alloy Wheels"
        ],
        specifications: {
            "Engine": "2.5L 4-Cylinder",
            "Transmission": "8-Speed Automatic",
            "Fuel Type": "Petrol",
            "Seating Capacity": "5 Passengers",
            "Drive Type": "Front-Wheel Drive",
            "Fuel Economy": "12-14 km/L",
            "Color Options": "White, Black, Silver, Blue"
        }
    },
    {
        id: 2,
        name: "Toyota Corolla 2024",
        category: "Sedan",
        price: 25000000, // ₦25,000,000
        image: "images/cars/corolla.jpg",
        featured: true,
        description: "The world's best-selling car, the Toyota Corolla offers unmatched reliability and value. With its sleek design, comfortable ride, and excellent fuel economy, the Corolla is perfect for daily commuting and long-distance travel.",
        features: [
            "1.8L 4-Cylinder Engine",
            "CVT Automatic Transmission",
            "Fabric Seats",
            "7-inch Touchscreen Display",
            "Rearview Camera",
            "Apple CarPlay & Android Auto",
            "Lane Departure Warning",
            "Automatic Climate Control",
            "LED Headlights",
            "16-inch Alloy Wheels"
        ],
        specifications: {
            "Engine": "1.8L 4-Cylinder",
            "Transmission": "CVT Automatic",
            "Fuel Type": "Petrol",
            "Seating Capacity": "5 Passengers",
            "Drive Type": "Front-Wheel Drive",
            "Fuel Economy": "15-17 km/L",
            "Color Options": "White, Silver, Red, Black"
        }
    },
    {
        id: 3,
        name: "Toyota Hilux 2024",
        category: "Truck",
        price: 50000000, // ₦50,000,000
        image: "images/cars/hilux.jpg",
        featured: true,
        description: "The legendary Toyota Hilux is built for the toughest terrains. This rugged pickup truck combines exceptional durability with modern comfort, making it ideal for both work and adventure. Known for its indestructible reliability.",
        features: [
            "2.8L Diesel Turbo Engine",
            "6-Speed Manual/Automatic",
            "4WD System",
            "Hill Start Assist",
            "Rear Differential Lock",
            "Touchscreen Navigation",
            "Cruise Control",
            "Heavy-Duty Suspension",
            "Towing Capacity: 3,500kg",
            "Cargo Bed Protection"
        ],
        specifications: {
            "Engine": "2.8L Turbo Diesel",
            "Transmission": "6-Speed Auto/Manual",
            "Fuel Type": "Diesel",
            "Seating Capacity": "5 Passengers",
            "Drive Type": "4WD",
            "Fuel Economy": "10-12 km/L",
            "Color Options": "White, Silver, Black, Grey"
        }
    },
    {
        id: 4,
        name: "Toyota RAV4 2024",
        category: "SUV",
        price: 42000000, // ₦42,000,000
        image: "images/cars/rav4.jpg",
        featured: true,
        description: "The Toyota RAV4 is a versatile compact SUV that excels in both city driving and off-road adventures. With its spacious interior, advanced safety features, and powerful performance, the RAV4 is perfect for modern families.",
        features: [
            "2.5L 4-Cylinder Engine",
            "8-Speed Automatic Transmission",
            "AWD System",
            "Panoramic Sunroof",
            "Power Liftgate",
            "9-inch Touchscreen",
            "Wireless Charging",
            "Blind Spot Monitoring",
            "Adaptive Cruise Control",
            "18-inch Alloy Wheels"
        ],
        specifications: {
            "Engine": "2.5L 4-Cylinder",
            "Transmission": "8-Speed Automatic",
            "Fuel Type": "Petrol",
            "Seating Capacity": "5 Passengers",
            "Drive Type": "AWD",
            "Fuel Economy": "11-13 km/L",
            "Color Options": "White, Black, Blue, Red, Silver"
        }
    },
    {
        id: 5,
        name: "Toyota Land Cruiser 2024",
        category: "SUV",
        price: 110000000, // ₦110,000,000
        image: "images/cars/landcruiser.jpg",
        featured: true,
        description: "The ultimate luxury SUV, the Toyota Land Cruiser is an icon of off-road capability and premium comfort. With its powerful V8 engine and unmatched reliability, the Land Cruiser is built for those who accept no compromise.",
        features: [
            "3.5L V6 Twin-Turbo Engine",
            "10-Speed Automatic Transmission",
            "Full-Time 4WD",
            "Multi-Terrain Select",
            "Crawl Control",
            "Premium Leather Interior",
            "12.3-inch Touchscreen",
            "Mark Levinson Sound System",
            "360-Degree Camera",
            "Adaptive Suspension"
        ],
        specifications: {
            "Engine": "3.5L V6 Twin-Turbo",
            "Transmission": "10-Speed Automatic",
            "Fuel Type": "Petrol",
            "Seating Capacity": "7-8 Passengers",
            "Drive Type": "4WD",
            "Fuel Economy": "8-10 km/L",
            "Color Options": "White, Black, Silver, Grey"
        }
    },
    {
        id: 6,
        name: "Toyota Prado 2024",
        category: "SUV",
        price: 67500000, // ₦67,500,000
        image: "images/cars/prado.jpg",
        featured: true,
        description: "The Toyota Prado offers premium SUV luxury with outstanding off-road capability. Perfect for families who need space, comfort, and the confidence to tackle any terrain. A status symbol with substance.",
        features: [
            "2.8L Turbo Diesel Engine",
            "6-Speed Automatic Transmission",
            "4WD with Locking Differential",
            "Kinetic Dynamic Suspension",
            "7-Seater Configuration",
            "Leather Seats",
            "Dual-Zone Climate Control",
            "Premium Audio System",
            "Parking Sensors",
            "Running Boards"
        ],
        specifications: {
            "Engine": "2.8L Turbo Diesel",
            "Transmission": "6-Speed Automatic",
            "Fuel Type": "Diesel",
            "Seating Capacity": "7 Passengers",
            "Drive Type": "4WD",
            "Fuel Economy": "9-11 km/L",
            "Color Options": "White, Black, Silver, Pearl"
        }
    },
    {
        id: 7,
        name: "Toyota Avalon 2024",
        category: "Sedan",
        price: 38000000, // ₦38,000,000
        image: "images/cars/avalon.jpg",
        featured: false,
        description: "The Toyota Avalon is the flagship sedan that delivers executive-level luxury and refinement. With its spacious cabin, smooth ride, and advanced technology, the Avalon is designed for those who demand the very best.",
        features: [
            "3.5L V6 Engine",
            "8-Speed Automatic Transmission",
            "Premium Leather Interior",
            "Heated & Ventilated Seats",
            "JBL Premium Audio",
            "Wireless Charging",
            "Heads-Up Display",
            "Adaptive Cruise Control",
            "Lane Tracing Assist",
            "18-inch Wheels"
        ],
        specifications: {
            "Engine": "3.5L V6",
            "Transmission": "8-Speed Automatic",
            "Fuel Type": "Petrol",
            "Seating Capacity": "5 Passengers",
            "Drive Type": "Front-Wheel Drive",
            "Fuel Economy": "10-12 km/L",
            "Color Options": "White, Black, Silver, Blue"
        }
    },
    {
        id: 8,
        name: "Toyota Sienna 2024",
        category: "Minivan",
        price: 46000000, // ₦46,000,000
        image: "images/cars/sienna.jpg",
        featured: false,
        description: "The Toyota Sienna is the perfect family minivan with seating for up to 8 passengers. Combining comfort, versatility, and advanced safety features, the Sienna makes every family trip enjoyable and stress-free.",
        features: [
            "2.5L Hybrid Engine",
            "AWD System",
            "8-Passenger Seating",
            "Power Sliding Doors",
            "Power Liftgate",
            "Tri-Zone Climate Control",
            "Rear Entertainment System",
            "Rearview Camera",
            "Apple CarPlay & Android Auto",
            "Multiple USB Ports"
        ],
        specifications: {
            "Engine": "2.5L Hybrid",
            "Transmission": "CVT Automatic",
            "Fuel Type": "Hybrid (Petrol)",
            "Seating Capacity": "8 Passengers",
            "Drive Type": "AWD",
            "Fuel Economy": "14-16 km/L",
            "Color Options": "White, Silver, Blue, Grey"
        }
    },
    {
        id: 9,
        name: "Toyota Venza 2024",
        category: "SUV",
        price: 43500000, // ₦43,500,000
        image: "images/cars/venza.jpg",
        featured: false,
        description: "The Toyota Venza is a sophisticated midsize SUV that combines elegant styling with hybrid efficiency. Perfect for those who want a premium SUV experience with excellent fuel economy and modern technology.",
        features: [
            "2.5L Hybrid Engine",
            "AWD System",
            "Panoramic Glass Roof",
            "12.3-inch Touchscreen",
            "Premium JBL Audio",
            "Leather Seats",
            "Power Liftgate",
            "Wireless Charging",
            "Star Gaze Roof",
            "19-inch Alloy Wheels"
        ],
        specifications: {
            "Engine": "2.5L Hybrid",
            "Transmission": "CVT Automatic",
            "Fuel Type": "Hybrid (Petrol)",
            "Seating Capacity": "5 Passengers",
            "Drive Type": "AWD",
            "Fuel Economy": "15-17 km/L",
            "Color Options": "White, Black, Blue, Red"
        }
    },
    {
        id: 10,
        name: "Toyota Highlander 2024",
        category: "SUV",
        price: 55000000, // ₦55,000,000
        image: "images/cars/highlander.jpg",
        featured: false,
        description: "The Toyota Highlander is a premium three-row SUV that offers space, comfort, and capability for large families. With its refined interior and powerful performance, the Highlander delivers a first-class driving experience.",
        features: [
            "3.5L V6 Engine",
            "8-Speed Automatic Transmission",
            "AWD System",
            "8-Passenger Seating",
            "Leather Interior",
            "12.3-inch Touchscreen",
            "Panoramic Moonroof",
            "Tri-Zone Climate Control",
            "Power Liftgate",
            "20-inch Alloy Wheels"
        ],
        specifications: {
            "Engine": "3.5L V6",
            "Transmission": "8-Speed Automatic",
            "Fuel Type": "Petrol",
            "Seating Capacity": "8 Passengers",
            "Drive Type": "AWD",
            "Fuel Economy": "10-12 km/L",
            "Color Options": "White, Black, Silver, Blue, Red"
        }
    }
];

// Function to get a car by ID
function getCarById(id) {
    return carsData.find(car => car.id === parseInt(id));
}

// Function to get featured cars only
function getFeaturedCars() {
    return carsData.filter(car => car.featured);
}

// Function to get cars by category
function getCarsByCategory(category) {
    if (category === 'all') {
        return carsData;
    }
    return carsData.filter(car => car.category === category);
}

// Function to search cars by name
function searchCars(searchTerm) {
    const term = searchTerm.toLowerCase();
    return carsData.filter(car => 
        car.name.toLowerCase().includes(term) || 
        car.category.toLowerCase().includes(term)
    );
}

// Function to filter cars by price range
function filterCarsByPrice(minPrice, maxPrice) {
    return carsData.filter(car => 
        car.price >= minPrice && car.price <= maxPrice
    );
}

// Function to get similar cars (same category, different car)
function getSimilarCars(carId, category, limit = 3) {
    return carsData
        .filter(car => car.category === category && car.id !== parseInt(carId))
        .slice(0, limit);
}

// Export for use in other files (if using modules)
// Uncomment if using ES6 modules
// export { carsData, getCarById, getFeaturedCars, getCarsByCategory, searchCars, filterCarsByPrice, getSimilarCars };