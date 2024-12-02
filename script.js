// Sample Data for Properties
const properties = [
    {
        id: 1,
        title: "Luxury Apartment in Mumbai",
        location: "Mumbai, Maharashtra",
        price: 15000000,
        bedrooms: 3,
        propertyType: "apartment",
        imageUrl: "https://via.placeholder.com/300x200?text=Luxury+Apartment"
    },
    {
        id: 2,
        title: "2BHK House in Pune",
        location: "Pune, Maharashtra",
        price: 8000000,
        bedrooms: 2,
        propertyType: "house",
        imageUrl: "https://via.placeholder.com/300x200?text=2BHK+House"
    },
    {
        id: 3,
        title: "Villa with Pool in Goa",
        location: "Goa",
        price: 25000000,
        bedrooms: 5,
        propertyType: "villa",
        imageUrl: "https://via.placeholder.com/300x200?text=Villa+with+Pool"
    },
    {
        id: 4,
        title: "Residential Land in Bangalore",
        location: "Bangalore, Karnataka",
        price: 12000000,
        bedrooms: 0,
        propertyType: "land",
        imageUrl: "https://via.placeholder.com/300x200?text=Residential+Land"
    }
];

// Function to display property listings
function displayProperties(propertiesToDisplay) {
    const propertyList = document.getElementById("property-list");
    propertyList.innerHTML = ""; // Clear the current list

    if (propertiesToDisplay.length === 0) {
        propertyList.innerHTML = "<p>No properties found based on your criteria.</p>";
    } else {
        propertiesToDisplay.forEach(property => {
            const propertyCard = document.createElement("div");
            propertyCard.classList.add("property-card");

            propertyCard.innerHTML = `
                <img src="${property.imageUrl}" alt="${property.title}">
                <h3>${property.title}</h3>
                <p><strong>Location:</strong> ${property.location}</p>
                <p><strong>Price:</strong> ₹${property.price.toLocaleString()}</p>
                <p><strong>Bedrooms:</strong> ${property.bedrooms}</p>
                <p><strong>Property Type:</strong> ${property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}</p>
            `;

            propertyList.appendChild(propertyCard);
        });
    }
}

// Function to apply filters
function applyFilters(event) {
    event.preventDefault();

    // Get values from the filter form
    const location = document.getElementById("filterLocation").value.toLowerCase();
    const price = parseInt(document.getElementById("filterPrice").value);
    const bedrooms = parseInt(document.getElementById("filterBedrooms").value);
    const propertyType = document.getElementById("filterPropertyType").value.toLowerCase();

    // Filter properties based on the input values
    const filteredProperties = properties.filter(property => {
        const matchesLocation = property.location.toLowerCase().includes(location);
        const matchesPrice = price ? property.price <= price : true;
        const matchesBedrooms = bedrooms ? property.bedrooms >= bedrooms : true;
        const matchesPropertyType = propertyType !== "any" ? property.propertyType === propertyType : true;

        return matchesLocation && matchesPrice && matchesBedrooms && matchesPropertyType;
    });

    // Display the filtered properties
    displayProperties(filteredProperties);
}

// Function to navigate to the "Home" section (top of the page)
function goToHome() {
    window.scrollTo(0, 0); // Scroll to the top of the page
}

// Function to scroll to the "Properties" section
function showProperties() {
    document.getElementById("properties-section").scrollIntoView({ behavior: 'smooth' });
}

// Function to show an "About Us" section (using alert for demo purposes)
function showAboutUs() {
    alert("About Us: We provide premium real estate services across India.");
}

// Function to show a "Contact Us" section (using alert for demo purposes)
function showContact() {
    alert("Contact Us: You can reach us at contact@indiarealeastate.com.");
}

// Display all properties when the page loads
window.onload = function () {
    displayProperties(properties);
};

// Attach the filter form submit event listener
document.getElementById("filterForm").addEventListener("submit", applyFilters);

