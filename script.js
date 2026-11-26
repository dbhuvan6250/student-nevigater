// ============================================
// CIVIX - STUDENT SERVICES PORTAL
// Schemes + Opportunities + Recommendations
// ============================================


// ============================================
// 1. GOVERNMENT SCHEMES DATABASE
// ============================================

const schemes = [
    {
        name: "Karnataka State Scholarship Portal",
        category: "Scholarships",
        description: "Explore pre-matric and post-matric scholarship services offered through Karnataka government departments.",
        eligibility: "Depends on the applicable department, course and current notification.",
        link: "https://ssp.postmatric.karnataka.gov.in/",
        tags: ["Scholarships", "Government Schemes"],
        states: ["Karnataka"]
    },
    {
        name: "Vidyasiri Scheme",
        category: "Educational Assistance",
        description: "Explore food and accommodation assistance under Karnataka Backward Classes Welfare programmes.",
        eligibility: "Check the latest department notification for conditions.",
        link: "https://bcwd.karnataka.gov.in/",
        tags: ["Government Schemes", "Scholarships"],
        states: ["Karnataka"]
    },
    {
        name: "Labour Welfare Educational Assistance",
        category: "Educational Assistance",
        description: "Explore educational assistance for eligible children of workers covered by applicable Labour Welfare Board schemes.",
        eligibility: "Check the current board notification and worker conditions.",
        link: "https://klwbapps.karnataka.gov.in/",
        tags: ["Government Schemes", "Scholarships"],
        states: ["Karnataka"]
    }
];


// ============================================
// 2. STUDENT OPPORTUNITIES DATABASE
// ============================================

const opportunities = [
    {
        name: "AICTE National Internship Portal",
        category: "Internships",
        description: "Explore internship listings from organisations and institutions.",
        audience: "Students who meet individual internship requirements.",
        link: "https://internship.aicte-india.org/internships",
        tags: ["Internships", "Engineering", "Computer Science", "Python", "Java", "AI", "Data Science"]
    },
    {
        name: "National Career Service",
        category: "Jobs and Careers",
        description: "Explore job services, career guidance and employment opportunities.",
        audience: "Students, graduates and job seekers.",
        link: "https://www.ncs.gov.in/",
        tags: ["Jobs and Careers", "Communication"]
    },
    {
        name: "SWAYAM Online Courses",
        category: "Online Courses",
        description: "Explore online courses offered through recognised educational institutions.",
        audience: "Students and lifelong learners.",
        link: "https://swayam.gov.in/",
        tags: ["Online Courses", "Skill Development", "Python", "Java", "AI", "Data Science"]
    },
    {
        name: "Skill India Digital Hub",
        category: "Skill Development",
        description: "Explore skill development programmes and training resources.",
        audience: "Learners interested in developing professional skills.",
        link: "https://www.skillindiadigital.gov.in/",
        tags: ["Skill Development", "Online Courses", "Jobs and Careers"]
    },
    {
        name: "Programming and Web Development",
        category: "Technical Skills",
        description: "Explore learning resources for programming and web development.",
        audience: "Students interested in software development.",
        link: "https://swayam.gov.in/",
        tags: ["Online Courses", "Skill Development", "Python", "Java", "Web Development", "C Programming"]
    },
    {
        name: "AI and Data Science Learning",
        category: "Technology Skills",
        description: "Explore courses and learning resources related to artificial intelligence and data science.",
        audience: "Students interested in AI and data technologies.",
        link: "https://swayam.gov.in/",
        tags: ["Online Courses", "AI", "Data Science", "Python", "SQL"]
    }
];


// ============================================
// 3. COMMON CARD CREATION
// ============================================

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

    extra.textContent = type === "scheme"
        ? "Eligibility: " + item.eligibility
        : "Suitable for: " + item.audience;

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "btn";
    link.textContent = "Visit Official Portal";

    card.append(heading, category, description, extra, link);

    return card;
}


// ============================================
// 4. DISPLAY GOVERNMENT SCHEMES
// ============================================

function displaySchemes(data) {

    const container = document.getElementById("schemeContainer");
    container.replaceChildren();

    if (data.length === 0) {
        container.textContent = "No schemes found.";
        return;
    }

    data.forEach(item => {
        container.appendChild(createCard(item, "scheme"));
    });
}


function showSchemes() {

    hideOtherSections("scheme-list");

    const section = document.getElementById("scheme-list");
    section.hidden = false;

    document.getElementById("schemeSearch").value = "";

    displaySchemes(schemes);

    section.scrollIntoView({ behavior: "smooth" });
}


function filterSchemes() {

    const search = document
        .getElementById("schemeSearch")
        .value.toLowerCase().trim();

    const filtered = schemes.filter(item =>
        (item.name + " " + item.category + " " + item.description)
            .toLowerCase().includes(search)
    );

    displaySchemes(filtered);
}


function closeSchemes() {
    document.getElementById("scheme-list").hidden = true;
    document.getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
}


// ============================================
// 5. DISPLAY STUDENT OPPORTUNITIES
// ============================================

function displayOpportunities(data) {

    const container = document.getElementById("opportunityContainer");
    container.replaceChildren();

    if (data.length === 0) {
        container.textContent = "No opportunities found.";
        return;
    }

    data.forEach(item => {
        container.appendChild(createCard(item, "opportunity"));
    });
}


function showOpportunities() {

    hideOtherSections("opportunity-list");

    const section = document.getElementById("opportunity-list");
    section.hidden = false;

    document.getElementById("opportunitySearch").value = "";

    displayOpportunities(opportunities);

    section.scrollIntoView({ behavior: "smooth" });
}


function filterOpportunities() {

    const search = document
        .getElementById("opportunitySearch")
        .value.toLowerCase().trim();

    const filtered = opportunities.filter(item =>
        (item.name + " " + item.category + " " + item.description + " " + item.tags.join(" "))
            .toLowerCase().includes(search)
    );

    displayOpportunities(filtered);
}


function closeOpportunities() {
    document.getElementById("opportunity-list").hidden = true;
    document.getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
}


// ============================================
// 6. SECTION NAVIGATION
// ============================================

function hideOtherSections(activeId) {

    [
        "scheme-list",
        "opportunity-list",
        "recommendation"
    ].forEach(id => {

        if (id !== activeId) {
            document.getElementById(id).hidden = true;
        }

    });

}


// ============================================
// 7. OPEN RECOMMENDATION FORM
// ============================================

function openRecommendationForm() {

    hideOtherSections("recommendation");

    const section = document.getElementById("recommendation");
    section.hidden = false;

    document.getElementById("recommendationResults").replaceChildren();

    document.getElementById("studentForm").hidden = false;

    document.getElementById("backRecommendation").hidden = true;

    section.scrollIntoView({ behavior: "smooth" });
}


function closeRecommendation() {

    document.getElementById("recommendation").hidden = true;

    document.getElementById("services")
        .scrollIntoView({ behavior: "smooth" });
}


// ============================================
// 8. COLLECT STUDENT INPUT
// ============================================

function getStudentData(form) {

    const formData = new FormData(form);

    return {
        name: formData.get("studentName"),
        age: Number(formData.get("studentAge")),
        state: formData.get("studentState"),
        district: formData.get("studentDistrict"),
        qualification: formData.get("qualification"),
        course: formData.get("course"),
        branch: formData.get("branch"),
        year: formData.get("studyYear"),
        income: formData.get("income"),
        category: formData.get("category"),
        hostel: formData.get("hostel"),
        skills: formData.getAll("skills"),
        interests: formData.getAll("interests")
    };
}


// ============================================
// 9. RECOMMENDATION MATCHING ENGINE
// ============================================

function generateRecommendations(student) {

    const schemeResults = [];
    const opportunityResults = [];

    // Match schemes
    schemes.forEach(scheme => {

        let score = 0;
        const reasons = [];

        if (student.state === "Karnataka" &&
            scheme.states.includes("Karnataka")) {

            score += 3;
            reasons.push("The scheme is associated with Karnataka.");
        }

        student.interests.forEach(interest => {

            if (scheme.tags.includes(interest)) {
                score += 4;
                reasons.push("Matches your interest in " + interest + ".");
            }

        });

        if (score > 0) {

            schemeResults.push({
                item: scheme,
                score,
                reasons
            });

        }

    });


    // Match opportunities
    opportunities.forEach(opportunity => {

        let score = 0;
        const reasons = [];

        student.interests.forEach(interest => {

            if (opportunity.tags.includes(interest)) {

                score += 4;
                reasons.push("Matches your interest in " + interest + ".");

            }

        });

        student.skills.forEach(skill => {

            if (opportunity.tags.includes(skill)) {

                score += 2;
                reasons.push("Related to your skill in " + skill + ".");

            }

        });

        if (
            student.course === "Engineering" ||
            student.course === "Computer Science"
        ) {

            if (
                opportunity.tags.includes("Engineering") ||
                opportunity.tags.includes("Computer Science")
            ) {
                score += 2;
                reasons.push("Related to your course.");
            }

        }

        if (score > 0) {

            opportunityResults.push({
                item: opportunity,
                score,
                reasons
            });

        }

    });


    schemeResults.sort((a, b) => b.score - a.score);
    opportunityResults.sort((a, b) => b.score - a.score);

    return {
        schemes: schemeResults,
        opportunities: opportunityResults
    };

}


// ============================================
// 10. DISPLAY RECOMMENDATIONS
// ============================================

function displayRecommendations(student, results) {

    const output = document.getElementById("recommendationResults");

    output.replaceChildren();

    const heading = document.createElement("h2");
    heading.textContent = "Your CIVIX Recommendations";

    const welcome = document.createElement("p");
    welcome.textContent =
        "Hello " + student.name +
        "! Here are resources matching your selected interests and skills.";

    output.append(heading, welcome);

    addRecommendationGroup(
        output,
        "Government Schemes and Scholarships",
        results.schemes,
        "scheme"
    );

    addRecommendationGroup(
        output,
        "Student Opportunities",
        results.opportunities,
        "opportunity"
    );

    const note = document.createElement("p");
    note.className = "disclaimer";

    note.textContent =
        "These are preliminary relevance suggestions, not confirmed eligibility. " +
        "Verify all scheme conditions, deadlines and availability on the official portal.";

    output.appendChild(note);

}


function addRecommendationGroup(container, title, results, type) {

    const heading = document.createElement("h3");
    heading.className = "recommendation-heading";
    heading.textContent = title;

    container.appendChild(heading);

    if (results.length === 0) {

        const message = document.createElement("p");
        message.textContent =
            "No direct matches found. Try selecting more interests or skills.";

        container.appendChild(message);
        return;
    }

    const cards = document.createElement("div");
    cards.className = "container";

    results.forEach(result => {

        const card = createCard(result.item, type);

        const reason = document.createElement("p");
        reason.textContent =
            "Why recommended: " + [...new Set(result.reasons)].join(" ");

        const match = document.createElement("p");
        match.className = "match-label";
        match.textContent = "Relevance score: " + result.score;

        card.append(reason, match);
        cards.appendChild(card);

    });

    container.appendChild(cards);

}


// ============================================
// 11. FORM SUBMISSION
// ============================================

document.getElementById("studentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        if (!this.reportValidity()) {
            return;
        }

        const student = getStudentData(this);

        const results = generateRecommendations(student);

        displayRecommendations(student, results);

        this.hidden = true;

        document.getElementById("backRecommendation").hidden = false;

        document.getElementById("recommendationResults")
            .scrollIntoView({ behavior: "smooth" });

    });


// ============================================
// 12. OTHER SERVICE MESSAGES
// ============================================

function showMessage(service) {

    alert(
        "Welcome to CIVIX!\n\n" +
        "You selected: " + service +
        "\n\nMore information will be available soon."
    );

}


// ============================================
// 13. WEBSITE LOADED
// ============================================

console.log("CIVIX Student Portal Loaded Successfully!");
console.log("Government Schemes:", schemes.length);
console.log("Student Opportunities:", opportunities.length);
console.log("Recommendation System: Ready");
