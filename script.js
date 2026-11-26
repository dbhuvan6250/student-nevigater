// ===================================
// CIVIX - Student Portal
// Karnataka Government Schemes
// ===================================

// Government scheme information
const schemes = [

    {
        name: "SSP Pre-Matric Scholarship",
        category: "School Education",
        description:
            "Scholarship application services for eligible students studying before Class 10 through Karnataka's State Scholarship Portal.",
        eligibility:
            "Eligibility depends on the department, category and current notification.",
        link:
            "https://ssp.karnataka.gov.in/"
    },

    {
        name: "SSP Post-Matric Scholarship",
        category: "Higher Education",
        description:
            "Scholarship services for eligible students pursuing post-matric education through Karnataka's State Scholarship Portal.",
        eligibility:
            "Check the applicable department scheme, course and income conditions.",
        link:
            "https://ssp.postmatric.karnataka.gov.in/"
    },

    {
        name: "Vidyasiri Food and Accommodation Scheme",
        category: "Food and Accommodation",
        description:
            "Educational support for eligible Backward Classes students pursuing post-matric courses who do not receive the specified hostel facilities.",
        eligibility:
            "Check the current Backward Classes Welfare Department notification.",
        link:
            "https://bcwd.karnataka.gov.in/"
    },

    {
        name: "Minority Student Welfare Schemes",
        category: "Minority Welfare",
        description:
            "Educational assistance and scholarship programmes for eligible students under the Minority Welfare Department.",
        eligibility:
            "Scheme-specific community, course and other conditions apply.",
        link:
            "https://kodagu.nic.in/en/minority-welfare-department/"
    },

    {
        name: "Karnataka Labour Welfare Board Scholarship",
        category: "Educational Assistance",
        description:
            "Educational welfare assistance for eligible children and dependants of employees covered by the Labour Welfare Fund.",
        eligibility:
            "Check the current Labour Welfare Board rules and application notification.",
        link:
            "https://klwbapps.karnataka.gov.in/"
    }

];


// ===================================
// DISPLAY GOVERNMENT SCHEMES
// ===================================

function showSchemes() {

    const section = document.getElementById("scheme-list");

    section.hidden = false;

    document.getElementById("schemeSearch").value = "";

    displaySchemes(schemes);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


// ===================================
// CREATE SCHEME CARDS
// ===================================

function displaySchemes(data) {

    const container =
        document.getElementById("schemeContainer");

    container.innerHTML = "";

    if (data.length === 0) {

        container.innerHTML =
            "<p>No schemes found. Try another search.</p>";

        return;
    }

    data.forEach(function(scheme) {

        const card = document.createElement("div");

        card.className = "card scheme-card";

        const heading = document.createElement("h3");
        heading.textContent = scheme.name;

        const category = document.createElement("p");
        category.textContent = "Category: " + scheme.category;

        const description = document.createElement("p");
        description.textContent = scheme.description;

        const eligibility = document.createElement("p");
        eligibility.textContent =
            "Eligibility: " + scheme.eligibility;

        const link = document.createElement("a");

        link.href = scheme.link;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.className = "btn";
        link.textContent = "Visit Official Website";

        card.appendChild(heading);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(eligibility);
        card.appendChild(link);

        container.appendChild(card);

    });

}


// ===================================
// SEARCH GOVERNMENT SCHEMES
// ===================================

function filterSchemes() {

    const search =
        document.getElementById("schemeSearch")
        .value.toLowerCase().trim();

    const filtered = schemes.filter(function(scheme) {

        return (
            scheme.name.toLowerCase().includes(search) ||
            scheme.category.toLowerCase().includes(search) ||
            scheme.description.toLowerCase().includes(search)
        );

    });

    displaySchemes(filtered);

}


// ===================================
// CLOSE GOVERNMENT SCHEMES
// ===================================

function closeSchemes() {

    document.getElementById("scheme-list").hidden = true;

    document.getElementById("services")
        .scrollIntoView({ behavior: "smooth" });

}


// ===================================
// OTHER SERVICE MESSAGES
// ===================================

function showMessage(service) {

    alert(
        "Welcome to CIVIX!\n\n" +
        "You selected: " + service +
        "\n\nMore information will be available soon."
    );

}


// ===================================
// WEBSITE LOADED
// ===================================

console.log("CIVIX Student Portal Loaded Successfully!");
