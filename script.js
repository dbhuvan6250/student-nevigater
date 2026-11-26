// ========================================
// CIVIX - STUDENT SERVICES PORTAL
// Government Schemes + Student Opportunities
// ========================================


// ========================================
// 1. KARNATAKA GOVERNMENT SCHEMES
// ========================================

const schemes = [

    {
        name: "Karnataka State Scholarship Portal",
        category: "Student Scholarship",
        description:
            "Access pre-matric and post-matric scholarship services offered through Karnataka government departments.",
        eligibility:
            "Eligibility depends on the department, student category, course and current notification.",
        link:
            "https://ssp.postmatric.karnataka.gov.in/"
    },

    {
        name: "Minority Welfare Scholarships",
        category: "Minority Welfare",
        description:
            "Explore educational scholarships and assistance under Karnataka Minority Welfare Department.",
        eligibility:
            "Scheme-specific community, course and income conditions apply.",
        link:
            "https://minoritymitra.com/en"
    },

    {
        name: "Vidyasiri Scheme",
        category: "Food and Accommodation",
        description:
            "Explore educational food and accommodation assistance under Karnataka Backward Classes Welfare programmes.",
        eligibility:
            "Check the latest scheme notification for eligibility and application conditions.",
        link:
            "https://bcwd.karnataka.gov.in/"
    },

    {
        name: "Labour Welfare Educational Assistance",
        category: "Educational Assistance",
        description:
            "Explore educational assistance for eligible children of workers covered by Karnataka Labour Welfare Board schemes.",
        eligibility:
            "Check current board notifications and applicable worker and student conditions.",
        link:
            "https://klwbapps.karnataka.gov.in/"
    }

];


// ========================================
// 2. STUDENT OPPORTUNITIES
// ========================================

const opportunities = [

    {
        name: "AICTE National Internship Portal",
        category: "Internships",
        description:
            "Explore internship opportunities from government organisations, companies and institutions through the AICTE portal.",
        audience:
            "Students from eligible colleges and educational backgrounds. Check individual internship requirements.",
        link:
            "https://internship.aicte-india.org/internships"
    },

    {
        name: "National Career Service",
        category: "Jobs and Careers",
        description:
            "Explore employment opportunities, career guidance and job-related services through the National Career Service.",
        audience:
            "Students, fresh graduates and job seekers.",
        link:
            "https://www.ncs.gov.in/"
    },

    {
        name: "SWAYAM Online Courses",
        category: "Online Courses",
        description:
            "Learn different subjects through online courses offered by recognised institutions.",
        audience:
            "School students, college students and lifelong learners.",
        link:
            "https://swayam.gov.in/"
    },

    {
        name: "Skill India Digital Hub",
        category: "Skill Development",
        description:
            "Explore skill development courses, training and learning opportunities.",
        audience:
            "Learners interested in improving their professional skills.",
        link:
            "https://www.skillindiadigital.gov.in/"
    },

    {
        name: "AI and Machine Learning Learning Resources",
        category: "Technology Skills",
        description:
            "Explore learning resources and technical training opportunities to develop AI and machine learning skills.",
        audience:
            "Students interested in artificial intelligence and technology.",
        link:
            "https://swayam.gov.in/"
    },

    {
        name: "Programming and Web Development",
        category: "Technical Skills",
        description:
            "Explore online learning opportunities in programming, software development and web technologies.",
        audience:
            "Beginners and students interested in computer science.",
        link:
            "https://swayam.gov.in/"
    }

];


// ========================================
// 3. COMMON CARD CREATION FUNCTION
// ========================================

function createCard(item, type) {

    const card = document.createElement("div");

    card.className = "card result-card";

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const category = document.createElement("p");
    category.textContent = "Category: " + item.category;

    const description = document.createElement("p");
    description.textContent = item.description;

    const extra = document.createElement("p");

    if (type === "scheme") {
        extra.textContent = "Eligibility: " + item.eligibility;
    } else {
        extra.textContent = "Suitable for: " + item.audience;
    }

    const link = document.createElement("a");

    link.href = item.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "btn";
    link.textContent = "Visit Official Portal";

    card.appendChild(heading);
    card.appendChild(category);
    card.appendChild(description);
    card.appendChild(extra);
    card.appendChild(link);

    return card;
}


// ========================================
// 4. DISPLAY SCHEMES
// ========================================

function displaySchemes(data) {

    const container =
        document.getElementById("schemeContainer");

    container.replaceChildren();

    if (data.length === 0) {

        container.textContent = "No schemes found. Try another search.";

        return;
    }

    data.forEach(function(item) {

        container.appendChild(createCard(item, "scheme"));

    });

}


// ========================================
// 5. OPEN GOVERNMENT SCHEMES
// ========================================

function showSchemes() {

    const section =
        document.getElementById("scheme-list");

    document.getElementById("opportunity-list").hidden = true;

    section.hidden = false;

    document.getElementById("schemeSearch").value = "";

    displaySchemes(schemes);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// 6. SEARCH GOVERNMENT SCHEMES
// ========================================

function filterSchemes() {

    const search =
        document.getElementById("schemeSearch")
        .value.toLowerCase().trim();

    const filtered = schemes.filter(function(item) {

        return (
            item.name.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search)
        );

    });

    displaySchemes(filtered);

}


// ========================================
// 7. CLOSE GOVERNMENT SCHEMES
// ========================================

function closeSchemes() {

    document.getElementById("scheme-list").hidden = true;

    document.getElementById("services")
        .scrollIntoView({ behavior: "smooth" });

}


// ========================================
// 8. DISPLAY OPPORTUNITIES
// ========================================

function displayOpportunities(data) {

    const container =
        document.getElementById("opportunityContainer");

    container.replaceChildren();

    if (data.length === 0) {

        container.textContent =
            "No opportunities found. Try another search.";

        return;
    }

    data.forEach(function(item) {

        container.appendChild(createCard(item, "opportunity"));

    });

}


// ========================================
// 9. OPEN STUDENT OPPORTUNITIES
// ========================================

function showOpportunities() {

    const section =
        document.getElementById("opportunity-list");

    document.getElementById("scheme-list").hidden = true;

    section.hidden = false;

    document.getElementById("opportunitySearch").value = "";

    displayOpportunities(opportunities);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// 10. SEARCH OPPORTUNITIES
// ========================================

function filterOpportunities() {

    const search =
        document.getElementById("opportunitySearch")
        .value.toLowerCase().trim();

    const filtered = opportunities.filter(function(item) {

        return (
            item.name.toLowerCase().includes(search) ||
            item.category.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search) ||
            item.audience.toLowerCase().includes(search)
        );

    });

    displayOpportunities(filtered);

}


// ========================================
// 11. CLOSE OPPORTUNITIES
// ========================================

function closeOpportunities() {

    document.getElementById("opportunity-list").hidden = true;

    document.getElementById("services")
        .scrollIntoView({ behavior: "smooth" });

}


// ========================================
// 12. OTHER SERVICE MESSAGES
// ========================================

function showMessage(service) {

    alert(
        "Welcome to CIVIX!\n\n" +
        "You selected: " + service +
        "\n\nMore information will be available soon."
    );

}


// ========================================
// 13. WEBSITE LOADED
// ========================================

console.log("CIVIX Student Portal Loaded Successfully!");
console.log("Government Schemes Loaded:", schemes.length);
console.log("Student Opportunities Loaded:", opportunities.length);
