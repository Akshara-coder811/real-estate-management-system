// Sample properties data (this would ideally come from a backend or a database)
const properties = [
    {
        name: "Luxury Apartment in Mumbai",
        location: "Mumbai, Maharashtra",
        price: 8000000,
        bedrooms: 3,
        type: "apartment",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Spacious Villa in Goa",
        location: "Goa",
        price: 15000000,
        bedrooms: 4,
        type: "villa",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Modern House in Bangalore",
        location: "Bangalore, Karnataka",
        price: 6000000,
        bedrooms: 2,
        type: "house",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Cozy Apartment in Delhi",
        location: "Delhi",
        price: 5000000,
        bedrooms: 2,
        type: "apartment",
        image: "https://via.placeholder.com/300x200"
    },
    {
        name: "Luxury Villa in Kerala",
        location: "Kerala",
        price: 12000000,
        bedrooms: 5,
        type: "villa",
        image: "https://via.placeholder.com/300x200"
    }
];

// Function to filter properties based on search criteria
function filterProperties() {
    const location = document.getElementById("searchLocation").value.toLowerCase();
    const price = parseInt(document.getElementById("searchPrice").value, 10);
    const bedrooms = parseInt(document.getElementById("searchBedrooms").value, 10);

    const filteredProperties = properties.filter(property => {
        return (
            (location === "" || property.location.toLowerCase().includes(location)) &&
            (isNaN(price) || property.price <= price) &&
            (isNaN(bedrooms) || property.bedrooms >= bedrooms)
        );
    });

    displayProperties(filteredProperties);
}

// Function to display the filtered properties
function displayProperties(propertiesToDisplay) {
    const propertyList = document.getElementById("property-list");
    propertyList.innerHTML = ""; // Clear the existing list

    if (propertiesToDisplay.length === 0) {
        propertyList.innerHTML = "<p>No properties found.</p>";
    } else {
        propertiesToDisplay.forEach(property => {
            const propertyCard = document.createElement("div");
            propertyCard.classList.add("property-card");

            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.name}" />
                <h3>${property.name}</h3>
                <p>Location: ${property.location}</p>
                <p>Price: ₹${property.price.toLocaleString()}</p>
                <p>Bedrooms: ${property.bedrooms}</p>
                <a href="#">View Details</a>
            `;

            propertyList.appendChild(propertyCard);
        });
    }
}

// Add event listener for the search form
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    filterProperties();
});

// Initial display of properties
displayProperties(properties);
