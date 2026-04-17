document.getElementById('gen-json').addEventListener('click', () => {
    
    document.querySelector('h2').innerText = "Introduction JSON";

    // Basic value gathering fields
    const introData = {
    "first_name": document.getElementById('first-name').value,
    "last_name": document.getElementById('last-name').value || "",
    "acknowledgement_statement": document.getElementById('ack-statement').value || "",
    "acknowledgement_date": document.getElementById('ack-date').value || "",
    "quote": document.getElementById('user-quote').value || "",
    "quote_author": document.getElementById('quote-author').value || "",
    "divider": document.getElementById('divider').value || "",
    "mascot_adjective": document.getElementById('mascot-adj').value || "",
    "mascot_animal": document.getElementById('mascot-animal').value || "",
    "personal_background": document.getElementById('personal-background').value || "",
    "personal_statement": document.getElementById('personal-statement').value || "",
    "professional_statement": document.getElementById('professional-background').value || "",
    "academic_background": document.getElementById('academic-background').value || "",
    "courses": [],
    "links": [
        {"name": "LinkedIn", "href": document.getElementById('link-linkedin').value },
        {"name": "Github", "href": document.getElementById('link-github-io').value }
    ]
};

// Gather dynamic courses
// loops through every course div added dynamically
const courseEntries = document.querySelectorAll('.course-entry');

courseEntries.forEach((entry) => {
    const dept = entry.querySelector('.dept').value;
    const number = entry.querySelector('.course-num').value;
    const name = entry.querySelector('.course-name').value;
    const reason = entry.querySelector('.course-reason').value;
    
    introData.courses.push({
        "department": dept,
        "number": number,
        "name": name,
        "reason": reason
    });
});

// Object converted to JSON string
const jsonString = JSON.stringify(introData, null, 4);

// Replace default form with JSON output
const formElement = document.getElementById('intro-form');
const resultContainer = document.getElementById('result-container');

// spacing and line breaks preserved due to <pre> and <code>
resultContainer.innerHTML = `
    <pre><code class="language-json">${jsonString}</code></pre>
    <br>
    <a href="intro_form.html">Reset and Try Again</a>
    `;

    // Hide original form
    formElement.style.display = 'none';

    // Trigger highlight if included in library.
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
});